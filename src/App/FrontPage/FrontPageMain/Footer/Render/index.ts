import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';
import logfieldLogo from '@svgs/logfield-logo.svg'

export default class RenderFooter extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
          <div id='main'>
            <div id='first'>
              <div>logfield</div>
              <div id='logo'>
                <img src=${logfieldLogo} />
              </div>
            </div>
            <div id='second'>logfield는 오픈소스 입니다.</div>
          </div>
        </div>
      `, component.shadowRoot
    );
  }
}
