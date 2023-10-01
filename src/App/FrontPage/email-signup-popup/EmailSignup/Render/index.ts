import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export default class RenderEmailSignup extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
          <div id='main'>
            <div id='label'>회원가입</div>
            <input id='email' placeholder='이메일'></input>
            <input id='nickname' placeholder='닉네임'></input>
            <div id='signup-button'>회원가입</div>
          </div>
          <div id='logo'></div>
        </div>
      `, component.shadowRoot
    );
  }
}
