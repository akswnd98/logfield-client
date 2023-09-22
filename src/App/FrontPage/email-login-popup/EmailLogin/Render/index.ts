import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export default class RenderEmailLogin extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
          <input id='email'></input>
          <div id='login-button'>로그인</div>
        </div>
      `, component.shadowRoot
    );
  }
}
