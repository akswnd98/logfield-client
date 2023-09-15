import OwlNotifier from '../OwlNotifier';
import OwlObserver from '../OwlObserver';

export type ConstructorParam<DataType> = {
  initialData: DataType;
  observers: OwlObserver<DataType>[];
};

export default class OwlSimpleModel<DataType> {
  protected data: DataType;
  protected notifier: OwlNotifier<DataType>;

  constructor (payload: ConstructorParam<DataType>) {
    this.data = payload.initialData;
    this.notifier = new OwlNotifier({ observers: payload.observers });
  }

  getData () {
    return this.data;
  }

  async setData (data: DataType) {
    this.data = data;
    await this.notifier.notify(data);
  }

  registerObserver (observer: OwlObserver<DataType>) {
    this.notifier.registerObserver(observer);
  }
}
