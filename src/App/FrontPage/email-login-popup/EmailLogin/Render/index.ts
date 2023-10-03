import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export default class RenderEmailLogin extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
          <div id='main'>
            <div id='label'>로그인</div>
            <input id='email' placeholder='이메일'></input>
            <div id='login-button'>로그인</div>
          </div>
          <div id='logo'></div>
        </div>
      `, component.shadowRoot
    );
  }
}
