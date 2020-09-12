<template>
  <div class="area_wrapper">
    <div class="tree_wrapper">
      <vue-chart-tree
        v-if="rootData"
        ref="rootTreeNodeRef"
        :key="rootData.id"
        :treeNodeData="rootData"
        isRoot>
        <template v-slot:default="slotProps">
          <div class="parent_wrapper">
            <div class="parent_content" @click="changeNameModal(slotProps.data)">
              <p class="content_name">{{slotProps.data.treeNodeData.name}}</p>
            </div>
          </div>
        </template>
      </vue-chart-tree>
    </div>
    <div class="name_dialog" v-if="nameModalVisible">
      <div class="mask" @click="changeNameModal"></div>
      <div class="content">
        <textarea rows="8" cols="60" v-model="newName"></textarea>
        <button @click="updateName">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
import VueChartTree, { updatePartTree } from 'vue-chart-tree'

export default {
  components: {
    VueChartTree
  },
  data() {
    return {
      rootData: genTestData(),
      newName: '',
      activeNode: null,
      nameModalVisible: false
    }
  },
  handlerNodeClick(activeData) {
    this.activeData = activeData
    this.newName = activeData.treeNodeData.name
    this.changeNameModal()
  },
  changeNameModal() {
    this.nameModalVisible = !this.nameModalVisible
  },
  updateName() {
    this.activeData.treeNodeData.name = this.newName
    // 节点高度改变，需要调用 updatePartTree 方法进行位置的重新计算
    updatePartTree(this.activeData.$treeNodeRefs.treeNodeRef)
    this.changeNameModal()
  }
}
let id = 0
// 用于生成测试数据
/**
 * 用于生成测试数据
 * @param maxHeight 树状图的最大深度
 * @param maxChildrenHeight 节点最多拥有的直接子元素个数
 * @param height 当前路径的深度
 */
function genTestData(maxHeight = 5, maxChildrenLen = 5, height = 0) {
  const rootNode = {
    id: id++,
    name: genTestName(),
    isOpen: Math.random() > 0.4
  }
  if (height + 1 === maxHeight) {
    return rootNode
  }
  rootNode.children = Array(Math.round(Math.random() * maxChildrenLen)).fill(0).map(() => {
    return genTestData(maxHeight, maxChildrenLen, height + 1)
  })
  return rootNode
}

function genTestName() {
  const nameLen = Math.random() * 10 + 10
  let name = ''
  while (name.length < nameLen) {
    name += Math.random().toString(16).slice(2)
  }
  return name.slice(0, nameLen)
}
</script>
<style scoped lang="less">
.area_wrapper {
  min-height: 372px;
  box-sizing: border-box;
  padding: 60px;
  overflow-x: scroll;
  border-radius: 4px;
  background-color: #f5f5f5;
}
.parent_wrapper {
  display: inline-block;
  width: 100px;
  padding: 16px;
  box-sizing: border-box;
  border-left-width: 3px;
  border-left-style: solid;
  border-color: #F65656;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.15s ease;
  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
}
.parent_content {
  display: flex;
  align-items: flex-start;
}
.content_name {
  flex: 1;
  line-height: 16px;
  margin: 0;
  margin-left: 10px;
  overflow: hidden;
  white-space: initial;
  word-break: break-all;
  font-size: 14px;
  color: #333;
}
.name_dialog {
  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 20px 30px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 200;
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 100
  }
}
</style>