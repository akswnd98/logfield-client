import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';
import FullScreenPopupObserver from './Observer';

export type ConstructorParam = {
  model: OwlSimpleModel<boolean>;
};

export default class RegisterFullScreenPopupObserver extends OwlManipulator {
  protected model: OwlSimpleModel<boolean>;

  constructor (payload: ConstructorParam) {
    super();
    this.model = payload.model;
  }

  async manipulate (component: OwlComponent) {
    this.model.registerObserver(new FullScreenPopupObserver({ component }));
  }
}
