/**
 * 初始化树状图 tree
 * @param {HTMLElement} rootTreeNode 树状图的跟 treeNode 节点
 */
export function resetTree(rootTreeNode: HTMLElement): void;

/**
 * 更新树状图
 * 因局部节点状态发生变化，更新受到影响的所有节点的位置和height信息
 * @param {HTMLElement} treeNode 发生变化的节点所在的 treeNode 节点
 */
export function updatePartTree(treeNode: HTMLElement): void;
