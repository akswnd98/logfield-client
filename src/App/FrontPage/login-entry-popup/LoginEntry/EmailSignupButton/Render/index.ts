import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export default class RenderEmailSignupButton extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html` 
        <div id='root'>회원가입</div>
      `, component.shadowRoot
    );
  }
}
