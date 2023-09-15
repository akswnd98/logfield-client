import OwlOperator from '@/webowl/OwlOperator';
import { DataType } from '..';
import findAllNodes from '@/utils/api/post/findAll';
import { DataSet } from 'vis-data';
import { VisNodeType } from '@/utils/vis/types';

export type ConstructorParam = {
  nodes: DataSet<VisNodeType>;
};

export default class InitNodes extends OwlOperator<DataType> {
  protected nodes: DataSet<VisNodeType>;

  constructor (payload: ConstructorParam) {
    super();
    this.nodes = payload.nodes;
  }

  async operate (data: DataType) {
    const res = (await findAllNodes()).datas;
    for (let node of res) {
      data.nodes.set(node.id, { label: node.title });
      this.nodes.add({ id: node.id, label: node.title });
    }
  }
}
