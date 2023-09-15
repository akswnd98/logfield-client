import OwlObserver from '../OwlObserver';

export type ConstructorParam<NotificationType> = {
  observers: OwlObserver<NotificationType>[];
};

export default class OwlNotifier<NotificationType> {
  protected observers: OwlObserver<NotificationType>[];

  constructor (payload: ConstructorParam<NotificationType>) {
    this.observers = payload.observers;
  }

  async notify (data: NotificationType) {
    for (let i = 0; i < this.observers.length; i++) {
      await this.observers[i].observe(data);
    }
  }

  registerObserver (observer: OwlObserver<NotificationType>) {
    this.observers.push(observer);
  }
}
