import Notifier from '../Notifier';

type ConstructorParam<DataType> = {
  initialData: DataType;
  notifier: Notifier<DataType>;
};

export default class Model<DataType> {
  protected data: DataType;
  protected notifier: Notifier<DataType>;

  constructor (payload: ConstructorParam<DataType>) {
    this.data = payload.initialData;
    this.notifier = payload.notifier;
  }

  async setData (data: DataType) {
    this.data = data;
    await this.notifier.notify(data);
  }

  getData () {
    return this.data;
  }
}
