import findAllNodes from '@/utils/api/post/findAll';
import findAllEdges from '@/utils/api/edge/findAll';
import { VisEdgeType, VisNodeType } from '@/utils/vis/types';
import { DataSet } from 'vis-data';

export async function initNodes (nodes: DataSet<VisNodeType>) {
  const res = (await findAllNodes()).datas;
  for (let data of res) {
    nodes.add({ id: data.id, label: data.title });
  }
}

export async function initEdges (edges: DataSet<VisEdgeType>) {
  const res = (await findAllEdges()).datas;
  for (let data of res) {
    edges.add({ id: data.id, to: data.toId, from: data.fromId });
  }
}
