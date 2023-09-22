import findMyPosts from '@/utils/api/post/findMyPosts';
import findMyEdges from '@/utils/api/edge/findMyEdges';
import { VisEdgeType, VisNodeType } from '@/utils/vis/types';
import { DataSet } from 'vis-data';

export async function initNodes (nodes: DataSet<VisNodeType>) {
  const res = (await findMyPosts()).datas;
  for (let data of res) {
    nodes.add({ id: data.id, label: data.title });
  }
}

export async function initEdges (edges: DataSet<VisEdgeType>) {
  const res = (await findMyEdges()).datas;
  for (let data of res) {
    edges.add({ id: data.id, to: data.toId, from: data.fromId });
  }
}
