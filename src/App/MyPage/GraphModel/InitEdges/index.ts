import OwlOperator from '@/webowl/OwlOperator';
import { DataType } from '..';
import findMyEdges from '@/utils/api/edge/findMyEdges';
import { DataSet } from 'vis-data';
import { VisEdgeType } from '@/utils/vis/types';

export type ConstructorParam = {
  edges: DataSet<VisEdgeType>;
};

export default class InitEdges extends OwlOperator<DataType> {
  protected edges: DataSet<VisEdgeType>;

  constructor (payload: ConstructorParam) {
    super();
    this.edges = payload.edges;
  }

  async operate (data: DataType) {
    const res = (await findMyEdges()).datas;
    for (let edge of res) {
      data.edges.set(edge.id, { fromId: edge.fromId, toId: edge.toId });
      this.edges.add({ id: edge.id, to: edge.toId, from: edge.fromId });
    }
  }
}
