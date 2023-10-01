import OwlComponent from '@/webowl/OwlComponent';
import { html, render } from 'lit-html';
import OwlManipulator from '@/webowl/OwlManipulator';

export default class RenderLoginEntry extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
          <div id='main'>
            <div id='label'>logfield</div>
            <div id='email-login-button'></div>
            <div id='social-login-button'></div>
            <div id='email-signup-button'></div>
          </div>
          <div id='logo'></div>
        </div>
      `, component.shadowRoot
    );
  }
}

