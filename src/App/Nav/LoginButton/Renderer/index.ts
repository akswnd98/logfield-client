import OwlManipulator from '@/webowl/OwlManipulator';
import OwlComponent from '@/webowl/OwlComponent';
import { html, render } from 'lit-html';

export default class RenderLoginButton extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>시작하기</div>
      `, component.shadowRoot
    )
  }
}
