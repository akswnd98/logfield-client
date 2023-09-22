import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export default class RenderFrontPage extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
          <div id='main'></div>
          <div id='login-entry-popup'></div>
          <div id='email-login-popup'></div>
        </div>
      `, component.shadowRoot
    );
  }
}
