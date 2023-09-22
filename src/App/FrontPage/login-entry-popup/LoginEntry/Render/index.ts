import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export default class RenderLoginEntry extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
        <div id='email-login-button'></div>
          <div id='social-login-button'></div>
        </div>
      `, component.shadowRoot
    );
  }
}

