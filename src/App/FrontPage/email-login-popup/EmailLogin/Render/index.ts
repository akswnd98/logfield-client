import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';
import logfieldLogo from '@svgs/logfield-logo.svg';

export default class RenderEmailLogin extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
          <div id='main'>
            <div id='label'>logfield</div>
            <input id='email'></input>
            <div id='login-button'>로그인</div>
          </div>
          <div id='logo'></div>
        </div>
      `, component.shadowRoot
    );
  }
}
