import find, { ResponseParam } from '@/utils/api/post/find';
import OwlNotifier from '@/webowl/OwlNotifier';
import OwlObserver from '@/webowl/OwlObserver';

export type ConstructorParam = {
  notifier: OwlNotifier<ResponseParam>;
};

export default class UpdateEditorObserver extends OwlObserver<number> {
  protected notifier: OwlNotifier<ResponseParam>;

  constructor (payload: ConstructorParam) {
    super();
    this.notifier = payload.notifier;
  }

  async observe (data: number) {
    const res = await find(data)
    await this.notifier.notify(res);
  }
}
