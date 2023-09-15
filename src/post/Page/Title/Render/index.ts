import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export type ConstructorParam = {
  title: string;
};

export default class RenderTitle extends OwlManipulator {
  protected title: string;

  constructor (payload: ConstructorParam) {
    super();
    this.title = payload.title;
  }

  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
          <h1>${this.title}</h1>
        </div>
      `, component.shadowRoot
    );
  }
}
