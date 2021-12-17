/**
 * 只是做类型标注。
 * 因为源码中没有 export SlotProps BasicNodeData，
 * 需要 import { SlotProps, BasicNodeData } from 'vue-chart-tree/types/node' 方式引入。
 */
export interface BasicNodeData {
  id: number
  isOpen: boolean
  children?: BasicNodeData[]
}

interface SlotPropsData<D> {
  treeNodeData: D
  $treeNodeRefs: {
    treeNodeRef: HTMLElement,
  }
}

export interface SlotProps<D extends BasicNodeData = BasicNodeData> {
  data: SlotPropsData<D>
}
