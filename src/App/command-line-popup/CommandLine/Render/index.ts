import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export default class RenderCommandLine extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root' class='close'>
          <div id='title-input-div'>
            <input id='title-input'></input>
          </div>
          <div id='save-button-div'>
            <div id='save-button'>저장</div>
          </div>
        </div>
      `, component.shadowRoot
    );
  }
}
