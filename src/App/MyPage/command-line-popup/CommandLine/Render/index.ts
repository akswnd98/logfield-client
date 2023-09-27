import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export default class RenderCommandLine extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
          <div id='main'>
            <div id='label'>저장 할까요?</div>
            <div id='title-input-div'>
              <input id='title-input' placeholder='제목을 입력해주세요.'></input>
            </div>
            <div id='save-button-div'>
              <div id='save-button'>저장</div>
            </div>
          </div>
        </div>
      `, component.shadowRoot
    );
  }
}
