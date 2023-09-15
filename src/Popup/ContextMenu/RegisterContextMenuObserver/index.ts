import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';
import ContextMenuObserver from './Observer';
import ContextMenuModelType from '../ContextMenuModelType';

export type ConstructorParam = {
  model: OwlSimpleModel<ContextMenuModelType>;
};

export default class RegisterContextMenuObserver extends OwlManipulator {
  protected model: OwlSimpleModel<ContextMenuModelType>;

  constructor (payload: ConstructorParam) {
    super();
    this.model = payload.model;
  }

  async manipulate (component: OwlComponent) {
    this.model.registerObserver(new ContextMenuObserver({ component }));
  }
}
