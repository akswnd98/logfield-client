import OwlOperator from '@/webowl/OwlOperator';
import { DataType } from '..';
import { DataSet } from 'vis-data';
import { VisNodeType } from '@/utils/vis/types';
import deleteNode from '@/utils/api/post/delete';

export type ConstructorParam = {
  id: number;
  nodes: DataSet<VisNodeType>;
};

export default class DeleteNode extends OwlOperator<DataType> {
  protected id: number;
  protected nodes: DataSet<VisNodeType>;

  constructor (payload: ConstructorParam) {
    super();
    this.id = payload.id;
    this.nodes = payload.nodes;
  }

  async operate (data: DataType) {
    await deleteNode(this.id);
    this.nodes.remove(this.id);
    data.nodes.delete(this.id);
  }
}
