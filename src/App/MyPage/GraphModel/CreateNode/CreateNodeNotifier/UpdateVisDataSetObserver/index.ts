import OwlObserver from '@/webowl/OwlObserver';
import { CreateNodeNotificationType } from '..';
import { DataSet } from 'vis-data';
import { VisNodeType } from '@/utils/vis/types';

export type ConstructorParam = {
  nodes: DataSet<VisNodeType>;
};

export default class UpdateVisDataSetObserver extends OwlObserver<CreateNodeNotificationType> {
  protected nodes: DataSet<VisNodeType>;

  constructor (payload: ConstructorParam) {
    super();
    this.nodes = payload.nodes;
  }

  async observe (data: CreateNodeNotificationType) {
    this.nodes.add({ id: data.id, label: data.title });
  }
}
