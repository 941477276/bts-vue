export const cascaderMenuProps = {
  expandTrigger: { // 次级菜单的展开方式，支持click、hover
    type: String,
    default: 'click'
  },
  expandIcon: { // 自定义次级菜单展开图标
    type: String,
    default: ''
  },
  checkStrictly: { // 是否严格的遵守父子节点不互相关联
    type: Boolean,
    default: false
  },
  emitPath: { // 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
    type: Boolean,
    default: true
  },
  lazy: { // 是否动态加载子节点，需与 lazyLoad 方法结合使用
    type: Boolean,
    default: false
  },
  lazyLoadFn: { // 懒加载动态数据的方法，仅在 lazy 为 true 时有效
    type: Function,
    default: null
  },
  multiple: { // 是否支持多选
    type: Boolean,
    default: false
  },
  checkboxName: { // 复选框的name属性
    type: String,
    default: ''
  },
  radioName: { // 单选框的name属性
    type: String,
    default: ''
  }
};
