import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '..';

type ConstructorParam = {
  styles: string;
};

export default class OwlStyle extends OwlManipulator {
  styleElement: HTMLStyleElement;

  constructor (payload: ConstructorParam) {
    super();
    this.styleElement = document.createElement<'style'>('style');
    this.styleElement.textContent = payload.styles;
  }

  async manipulate (component: OwlComponent) {
    component.shadowRoot.appendChild(this.styleElement);
  }
}
