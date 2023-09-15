import OwlComponent from '@/webowl/OwlComponent';
import OwlObserver from '@/webowl/OwlObserver';

export type ConstructorParam = {
  component: OwlComponent;
};

export default class FullScreenPopupObserver extends OwlObserver<boolean> {
  protected component: OwlComponent;

  constructor (payload: ConstructorParam) {
    super();
    this.component = payload.component;
  }

  async observe (data: boolean) {
    try {
      const component = this.component.shadowRoot.getElementById('root');
      if (component === null) {
        throw 'no id root';
      }
      if (data) {
        component.classList.remove('close')
        component.classList.add('open')
      } else {
        component.classList.remove('open')
        component.classList.add('close')
      }
    } catch (e) {
      console.log(e);
    }
  }
}