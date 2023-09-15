import converter from '@/utils/mdHtmlConverter';
import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export type ConstructorParam = {
  body: string;
};

export default class RenderBody extends OwlManipulator {
  protected body: string;

  constructor (payload: ConstructorParam) {
    super();
    this.body = payload.body;
  }

  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'></div>
      `, component.shadowRoot
    );
    component.shadowRoot.getElementById('root')!.innerHTML = (await converter.process(this.body)).toString();
  }
}
