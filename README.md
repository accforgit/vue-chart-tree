# vue-chart-tree

![NPM](https://nodei.co/npm/vue-chart-tree.png?downloads=true&downloadRank=true&stars=true)

![img](https://img.shields.io/npm/v/vue-chart-tree.svg) ![img](https://img.shields.io/bundlephobia/minzip/vue-chart-tree.svg) ![img](https://img.shields.io/npm/dt/vue-chart-tree.svg) ![img](https://img.shields.io/github/license/accforgit/vue-chart-tree.svg)

`vue-chart-tree` 是一个特殊布局模式结构的`vue Tree`组件

![img](https://raw.githubusercontent.com/accforgit/vue-chart-tree/master/public/tree1.jpg)

## Demo

[Demo](https://accforgit.github.io/vue-chart-tree/index.html)

## 安装

```
npm install vue-chart-tree --save
```

## 导入

### 全局导入

```js
import Vue from 'vue'
import VueChartTree from 'vue-chart-tree'

Vue.use(VueChartTree)
```

### 局部导入

```js
// in ES6 modules
import VueChartTree from 'vue-chart-tree'

// in CommonJS
const VueChartTree = require('vue-chart-tree')

export default {
  components: {
    VueChartTree
  }
}
```

### script 脚本形式导入

```html
<script src="../node-modules/vue-chart-tree/lib/vue-chart-tree.umd.min.js"></script>
```

```js
new Vue({
  el: '#app',
  components: {
    'vue-chart-tree': window['vue-chart-tree']
  }
})
```

## 用法

组件库本身向外暴露了三个变量:
```js
import VueChartTree, { resetTree, updatePartTree } from 'vue-chart-tree'
```
`VueChartTree` 即为组件本身；
当开发者自行定义的 `slot`节点发生变化时（例如位置、尺寸等发生改变），由开发者主动调用 `updatePartTree` 进行树状图结构的更新；
如果因为特殊的操作需要重置整个树状图，则可以调用 `resetTree` 完成, `resetTree`接收一个 `VueChartTree`节点作为参数（可以通过 `$ref`获取）

参见 [demo](https://github.com/accforgit/vue-chart-tree/blob/master/test/chart-tree.vue)

## Options

### Props

|参数|类型|描述|默认值|是否必须|
|----|---|----|----|---|
|`isRoot`|`Boolean`|是否是整个树状结构的根节点（即 `rootNode`）|`true`|否|
|`treeNodeData`|`Object`|当前节点的数据信息|-|是|

#### treeNodeData

|参数|类型|描述|默认值|是否必须|
|----|---|----|----|---|
|`children`|`Array<treeNodeData>`|当前节点的子节点|-|否|
|`isOpen`|`Boolean`|当前节点是否是展开(`open`)状态|-|否|
|`other`|`any`|当前节点相关的其他值，这些值由开发者决定，一般来说是可能会被 `slot` 使用的值|-|否|

### slot

组件本身只是构建了一个树状结构，以及基本的交互，树状图上的节点由开发者自行决定，通过一个传入的 `default slot` 实现，所以具备较大的灵活性
具体用法参见 [demo](https://github.com/accforgit/vue-chart-tree/blob/master/test/chart-tree.vue)

|slot|描述|参数|
|----|---|----|
|`default`|默认插槽，自定义树的节点|{ data: { treeNodeData, $treeNodeRefs } }|
|`fold`|自定义展开和收起按钮|{ data: { treeNodeData, $treeNodeRefs } }|

## License

MIT