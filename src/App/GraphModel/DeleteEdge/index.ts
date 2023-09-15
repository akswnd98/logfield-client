import OwlOperator from '@/webowl/OwlOperator';
import { DataType } from '..';
import { DataSet } from 'vis-data';
import { VisEdgeType } from '@/utils/vis/types';
import deleteEdge from '@/utils/api/edge/delete';

export type ConstructorParam = {
  id: number;
  edges: DataSet<VisEdgeType>;
};

export default class DeleteEdge extends OwlOperator<DataType> {
  protected id: number;
  protected edges: DataSet<VisEdgeType>;

  constructor (payload: ConstructorParam) {
    super();
    this.id = payload.id;
    this.edges = payload.edges;
  }

  async operate (data: DataType) {
    await deleteEdge(this.id);
    this.edges.remove(this.id);
    data.edges.delete(this.id);
  }
}
