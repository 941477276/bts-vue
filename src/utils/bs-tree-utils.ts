import {
  BsNodeInfo
} from '../components/bs-tree/bs-tree-types';
import { isFunction } from './bs-util';

let caches: any = {};
/**
 * 将树形结构扁平化转成普通对象
 * @param treeData 树数据
 * @param childrenKey 节点的子节点属性名
 * @param disabledKey 节点是否禁用的属性名
 * @param nodeLevel 节点的层级
 * @package parentNodeLevelPath 父级节点层级路径
 * @param target 目标对象
 */
export function treeDataToFlattarnArr2 (treeId: string, treeData: Record<string, any>|Record<string, any>[], childrenKey: string, disabledKey: string, nodeLevel = 1, parentNodeLevelPath = '', target: BsNodeInfo[] = [], callback?: (nodeInfoItem: BsNodeInfo) => void) {
  if (!Array.isArray(treeData)) {
    treeData = [treeData];
  }
  /* if (!(treeId in caches)) {
    caches[treeId] = {
      cachedNodeInfo: {}, // 缓存找到过的节点
      cachedChildrenWhichHasChildren: {} // 缓存找到的节点有子节点的节点
    };
  } */
  caches[treeId] = {
    cachedNodeInfo: {}, // 缓存找到过的节点
    cachedChildrenWhichHasChildren: {} // 缓存找到的节点有子节点的节点
  };
  treeData.forEach((treeNode: any, index: number) => {
    if (!treeNode || typeof treeNode !== 'object') {
      return;
    }
    let nodeLevelPath = parentNodeLevelPath ? (parentNodeLevelPath + '_' + (index + 1)) : '' + (index + 1);
    let nodeInfoItem = {
      uid: '',
      nodeLevelPath,
      nodeLevel,
      node: treeNode,
      isDisabled: !!treeNode[disabledKey]
    };
    if (callback && isFunction(callback)) {
      callback(nodeInfoItem);
    }
    target.push(nodeInfoItem);

    let children = treeNode[childrenKey];
    if (children && (children?.length || 0) > 0) {
      treeDataToFlattarnArr2(treeId, children, childrenKey, disabledKey, nodeLevel + 1, nodeLevelPath, target, callback);
    }
  });
  return target;
};

/**
 * 根据节点的层级路径查找它的所有父级节点
 * @param nodeLevelPath 节点层级路径
 * @param treeNodeInfoArr 扁平化的树数组对象
 */
export function findParentsByNodeLevelPath2 <T extends BsNodeInfo> (nodeLevelPath: string, treeNodeInfoArr: T[]) {
  let nodeParents: T[] = [];
  if (!nodeLevelPath) {
    return nodeParents;
  }
  // if () {}
  // 从末尾开始查找“_”下划线的位置
  let lastUnderscoreIndex = nodeLevelPath.lastIndexOf('_');
  if (lastUnderscoreIndex <= 0) {
    return nodeParents;
  }
  nodeLevelPath = nodeLevelPath.substring(0, lastUnderscoreIndex);
  let recentedParentIndex = treeNodeInfoArr.findIndex(nodeInfoItem => nodeInfoItem.nodeLevelPath === nodeLevelPath);
  if (recentedParentIndex == -1) {
    return nodeParents;
  }
  nodeParents.push(treeNodeInfoArr[recentedParentIndex]);

  while (nodeLevelPath.length > 0) {
    // 从末尾开始查找“_”下划线的位置
    let lastUnderscoreIndex = nodeLevelPath.lastIndexOf('_');
    if (lastUnderscoreIndex <= 0) {
      return nodeParents;
    }
    nodeLevelPath = nodeLevelPath.substring(0, lastUnderscoreIndex);
    if (nodeLevelPath.length == 0) {
      return nodeParents;
    }
    let searchResultFlag = false;
    // 从已查找到的父元素最近的位置开始往前查找
    for (let i = recentedParentIndex; i >= 0; i--) {
      let item = treeNodeInfoArr[i];
      // 往前查找父级！
      if (item.nodeLevelPath === nodeLevelPath) {
        nodeParents.push(item);
        recentedParentIndex = i;
        searchResultFlag = true;
        break;
      }
    }
    // 如果往前查找未查找到，则从已查找到的父元素最近的位置开始往后查找
    if (!searchResultFlag) {
      for (let i = recentedParentIndex, len = treeNodeInfoArr.length; i < len; i++) {
        let item = treeNodeInfoArr[i];
        // 往后查找父级！
        if (item.nodeLevelPath === nodeLevelPath) {
          nodeParents.push(item);
          recentedParentIndex = i;
          searchResultFlag = true;
          break;
        }
      }
    }
  }
  return nodeParents;
};

/**
 * 根据节点的ID查找节点
 * @param uid 节点的id
 * @param treeNodeInfoArr 扁平化的树数组
 * @return {{node: object; nodeLevelPath: string}}
 */
export function findNodeByUid <T extends BsNodeInfo> (treeId: string, uid: any, treeNodeInfoArr: T[]) {
  let resultNode: null|BsNodeInfo = null;
  let cachedNodeInfo = caches[treeId].cachedNodeInfo;
  // 优先从缓存中取
  if (uid in cachedNodeInfo) {
    // 从缓存中取节点
    return cachedNodeInfo[uid];
  }
  for (let i = 0, len = treeNodeInfoArr.length; i < len; i++) {
    let nodeInfoItem = treeNodeInfoArr[i];
    if (nodeInfoItem.uid === uid) {
      resultNode = nodeInfoItem;
      break;
    }
  }
  cachedNodeInfo[uid] = resultNode;
  // console.log('resultNode', resultNode);
  return resultNode;
};

/**
 * 根据节点ID获取节点的子级节点（平铺开来的子节点数组）
 * @param treeId 树id
 * @param uid 节点id
 * @param treeNodeInfoArr 扁平化的树数组
 */
export function findChildrenNodesByUid<T extends BsNodeInfo> (treeId: string, uid: any, treeNodeInfoArr: T[]) {
  let currentNodeInfo: T = findNodeByUid(treeId, uid, treeNodeInfoArr);
  if (!currentNodeInfo) {
    return [];
  }
  let nodeLevelPath = currentNodeInfo.nodeLevelPath;
  let childrenNodes = treeNodeInfoArr.filter(nodeInfo => {
    let nodeLevels = nodeInfo.nodeLevelPath.split('_');
    nodeLevels.pop();
    // 节点层级路径移除最后一项后等于当前节点的层级路径就是当前节点子级节点
    return nodeLevels.join('_') === nodeLevelPath;
  });
  return childrenNodes;
}

/**
 * 根据节点的值查找所有父级节点
 * @param nodeValue 节点的值
 * @param nodeKey 节点的值的属性名
 * @param treeNodeInfoArr 扁平化的树数组
 * @return {{node: object; nodeLevelPath: string}}
 */
export function findParentsByUid<T extends BsNodeInfo> (treeId: string, uid: any, treeNodeInfoArr: T[]) {
  let nodeInfo = findNodeByUid(treeId, uid, treeNodeInfoArr);
  if (!nodeInfo) {
    return [];
  }
  let parents = findParentsByNodeLevelPath2<T>(nodeInfo.nodeLevelPath, treeNodeInfoArr);

  return parents;
};

/**
 * 根据节点id获取节点的所有子孙级节点（平铺开来的子孙节点数组）
 * @param nodeValue
 * @param nodeKey
 * @param treeNodeInfoArr
 */
export function findDescendantByBid <T extends BsNodeInfo> (treeId: string, uid: any, treeNodeInfoArr: T[]) {
  let currentNodeInfo = findNodeByUid<T>(treeId, uid, treeNodeInfoArr);
  if (!currentNodeInfo) {
    return [];
  }
  let nodeLevelPath = currentNodeInfo.nodeLevelPath;
  // 层级路径以当前节点的层级路径开头的都是当前节点的子孙级节点
  let flattarnChildren = treeNodeInfoArr.filter(nodeInfo => nodeInfo.nodeLevelPath.startsWith(nodeLevelPath + '_'));
  return flattarnChildren;
}

/**
 * 根据节点的id查找节点的有children的子节点
 * @param treeId 节点树id
 * @param uid 节点的id
 * @param childKey 节点的子节点属性名
 * @param treeNodeInfoArr 扁平化的树数组
 */
export function findChildrenWhichHasChildrenByUid <T extends BsNodeInfo> (treeId: string, uid: any, childKey: string, treeNodeInfoArr: T[]) {
  let descendantNodes = findDescendantByBid(treeId, uid, treeNodeInfoArr);
  descendantNodes = descendantNodes.filter(nodeItem => {
    let dataChildren = nodeItem.node[childKey] || [];
    return dataChildren.length > 0;
  });
  return descendantNodes;
}

/**
 * 清空缓存的节点信息
 */
export function clearCachedNodeInfo (treeId: string) {
  let treeCache = caches[treeId];
  if (!treeCache) {
    return;
  }
  treeCache.cachedNodeInfo = {}; // 缓存找到过的节点
  treeCache.cachedChildrenWhichHasChildren = {}; // 缓存找到的节点有子节点的节点
};
