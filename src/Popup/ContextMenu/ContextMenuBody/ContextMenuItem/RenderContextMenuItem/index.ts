import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export type ConstructorParam = {
  label: string;
};

export default class RenderContextMenuItem extends OwlManipulator {
  protected label: string;

  constructor (payload: ConstructorParam) {
    super();
    this.label = payload.label;
  }

  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>${this.label}</div>
      `, component.shadowRoot
    );
  }
}
