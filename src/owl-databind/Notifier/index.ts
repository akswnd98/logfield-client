import Observer from '../Observer';

type ConstructorParam<DataType> = {
  observers: Observer<DataType>[];
};

export default class Notifier<DataType> {
  protected observers: Observer<DataType>[];
  
  constructor (payload: ConstructorParam<DataType>) {
    this.observers = payload.observers;
  }

  async notify (data: DataType) {
    for (let i = 0; i < this.observers.length; i++) {
      await this.observers[i].observe(data);
    }
  }

  registerObserver (observer: Observer<DataType>) {
    this.observers.push(observer);
  }

  registerObservers (observers: Observer<DataType>[]) {
    this.observers.push(...observers);
  }
}
