import OwlOperator from '@/webowl/OwlOperator';
import { DataType } from '..';
import { DataSet } from 'vis-data';
import { VisNodeType } from '@/utils/vis/types';

export type ConstructorParam = {
  id: number;
  title: string;
  nodes: DataSet<VisNodeType>;
};

export default class UpdateNode extends OwlOperator<DataType> {
  protected id: number;
  protected title: string;
  protected nodes: DataSet<VisNodeType>;

  constructor (payload: ConstructorParam) {
    super();
    this.id = payload.id;
    this.title = payload.title;
    this.nodes = payload.nodes;
  }
  
  async operate (data: DataType) {
    try {
      this.nodes.updateOnly({ id: this.id, label: this.title });
      data.nodes.set(this.id, { label: this.title });
    } catch (e: any) {
      console.log(e);
    }
  }
}
