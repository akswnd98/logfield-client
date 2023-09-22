import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export default class RenderMyPage extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
          <div id='main'></div>
          <div id='editor-popup'></div>
          <div id='command-line-popup'></div>
        </div>
      `, component.shadowRoot
    );
  }
}
