import OwlComponent from '@/webowl/OwlComponent';
import OwlObserver from '@/webowl/OwlObserver';
import ContextMenuModelType from '../../ContextMenuModelType';

export type ConstructorParam = {
  component: OwlComponent;
};

export default class ContextMenuObserver extends OwlObserver<ContextMenuModelType> {
  protected component: OwlComponent;

  constructor (payload: ConstructorParam) {
    super();
    this.component = payload.component;
  }

  async observe (data: ContextMenuModelType) {
    try {
      const component = this.component.shadowRoot.getElementById('root');
      if (component === null) {
        throw 'no id root';
      }
      component.style.left = data.x;
      component.style.top = data.y;
      if (data.mode) {
        component.classList.remove('close');
        component.classList.add('open');
      } else {
        component.classList.remove('open');
        component.classList.add('close');
      }
    } catch (e) {
      console.log(e);
    }
  }
}