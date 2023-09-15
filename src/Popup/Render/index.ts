import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export type ConstructorParam = {
  bodyComponent: OwlComponent;
  body: OwlManipulator;
};

export default class RenderPopup extends OwlManipulator {
  protected bodyComponent: OwlComponent;
  protected body: OwlManipulator;

  constructor (payload: ConstructorParam) {
    super();
    this.bodyComponent = payload.bodyComponent;
    this.body = payload.body;
  }

  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root' class='close'>
          ${this.bodyComponent}
        </div>
      `, component.shadowRoot
    );
    await this.body.manipulate(this.bodyComponent);
  }
}
