import OwlOperator from '@/webowl/OwlOperator';
import { DataType } from '..';
import create from '@/utils/api/post/create';
import { DataSet } from 'vis-data';
import { VisNodeType } from '@/utils/vis/types';
import OwlNotifier from '@/webowl/OwlNotifier';
import OwlObserver from '@/webowl/OwlObserver';
import CreateNodeNotifier, { CreateNodeNotificationType } from './CreateNodeNotifier';
import UpdateVisDataSetObserver from './CreateNodeNotifier/UpdateVisDataSetObserver';
import RedrawNetworkObserver from './CreateNodeNotifier/RedrawNetworkObserver';

export type ConstructorParam = {
  title: string;
  nodes: DataSet<VisNodeType>;
};

export default class CreateNode extends OwlOperator<DataType> {
  protected title: string;
  protected notifier: OwlNotifier<CreateNodeNotificationType>;

  constructor (payload: ConstructorParam) {
    super();
    this.title = payload.title;
    this.notifier = new CreateNodeNotifier({
      observers: [
        new UpdateVisDataSetObserver({ nodes: payload.nodes }),
        new RedrawNetworkObserver()
      ]
    });
  }

  async operate (data: DataType) {
    try {
      const res = await create(this.title, '');
      this.notifier.notify({ id: res.id, title: this.title });
    } catch (e: any) {
      console.log(e);
    }
  }

  registerObserver (observer: OwlObserver<CreateNodeNotificationType>) {
    this.notifier.registerObserver(observer);
  }
}
