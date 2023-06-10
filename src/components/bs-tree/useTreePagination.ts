import { computed, ref, Ref } from 'vue';
import {
  findNodeInfoByValue2,
  findChildrenInfoFlattarnByNodeValue2
} from './bs-tree-utils';
import { BsNodeData, BsNodeInfo } from './bs-tree-types';
import { PlainObject } from '../types';

/**
 * 子节点分页处理
 * @param props props
 * @param treeId 树id
 * @param treeData 树数据
 */
export function useTreePagination (props: any, treeId: string, flatTreeNodeInfoArr: Ref<BsNodeInfo[]>, treeData?: Ref<BsNodeData[]|undefined>) {
  // 当前页码
  let pageCount = ref(1);
  // 子节点
  let nodeChildren = computed(function () {
    let children = treeData ? treeData.value : (props.nodeData[props.childrenKey] || []);
    let pageSize = Math.ceil(props.pageSize);
    let filterText = props.filterText;
    let filterFn = props.filterMethod;
    let nodeKey = props.nodeKey;
    let childrenKey = typeof treeData === 'undefined' ? props.childrenKey : props.props.children;

    let result = [];
    if (!isNaN(pageSize) && pageSize > 0 && children.length > pageSize) {
      result = children.slice(0, pageCount.value * pageSize);
    } else {
      result = children;
    }
    // 如果传递了过滤函数，则根据过滤函数的返回值进行查找
    if (typeof filterFn === 'function' && filterText !== '') {
      result = result.map(function (nodeData: PlainObject) {
        let show = false;
        // 如果节点有子孙节点，则只要子孙节点有一个匹配的那么该节点都应该显示出来
        if (nodeData[childrenKey]) {
          let childrensIfno = findChildrenInfoFlattarnByNodeValue2(treeId, nodeData[nodeKey], nodeKey, flatTreeNodeInfoArr.value);
          childrensIfno.unshift({
            node: nodeData
          } as BsNodeInfo);
          show = childrensIfno.some(function (childNodeInfo) {
            return filterFn(childNodeInfo.node, filterText);
          });
        } else {
          show = !!filterFn(nodeData, filterText);
        }

        return {
          ...nodeData,
          _nodeShow: show
        };
      });
    }
    return result;
  });
  // 总页数
  let totalPage = computed(function () {
    let children = treeData ? treeData.value : (props.nodeData[props.childrenKey] || []);

    let pageSize = Math.ceil(props.pageSize);
    if (!isNaN(pageSize) && pageSize > 0 && children.length > pageSize) {
      return Math.ceil(children.length / pageSize);
    }
    return 0;
  });
  // 显示更多子节点
  let showMoreChildNode = function () {
    if (props.pageSize <= 0 && pageCount.value >= totalPage.value) {
      return;
    }
    pageCount.value++;
  };

  // 显示所有子节点
  let showAllChildNode = function () {
    if (props.pageSize <= 0) {
      return;
    }
    pageCount.value = totalPage.value;
  };

  return {
    pageCount,
    nodeChildren,
    totalPage,
    showMoreChildNode,
    showAllChildNode
  };
};
