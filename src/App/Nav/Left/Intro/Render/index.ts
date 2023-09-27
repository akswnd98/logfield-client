import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export default class RenderIntro extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>소개</div>
      `, component.shadowRoot
    );
  }
}
