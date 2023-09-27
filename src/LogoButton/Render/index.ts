import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';
import logfieldLogo from '@svgs/logfield-logo.svg';

export default class RenderLogoButton extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'><img src=${logfieldLogo} /></div>
      `, component.shadowRoot
    );
  }
}
