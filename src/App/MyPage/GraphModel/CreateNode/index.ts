import OwlOperator from '@/webowl/OwlOperator';
import { DataType } from '..';
import create from '@/utils/api/post/create';
import { DataSet } from 'vis-data';
import { VisNodeType } from '@/utils/vis/types';

export type ConstructorParam = {
  title: string;
  nodes: DataSet<VisNodeType>;
};

export default class CreateNode extends OwlOperator<DataType> {
  
  protected title: string;
  protected nodes: DataSet<VisNodeType>;
  constructor (payload: ConstructorParam) {
    super();
    this.title = payload.title;
    this.nodes = payload.nodes;
  }

  async operate (data: DataType) {
    try {
      const res = await create(this.title, '');
      this.nodes.add({ id: res.id, label: this.title });
      data.nodes.set(res.id, { label: this.title });
    } catch (e: any) {
      console.log(e);
    }
  }
}
