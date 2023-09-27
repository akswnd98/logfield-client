import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export default class RenderFirstSection extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
          <div id='first'>logfield 1.0</div>
          <div id='second'>출시</div>
          <div id='third'>재미로 한번 만들어 봤습니다.</div>
        </div>
      `, component.shadowRoot
    );
  }
}
