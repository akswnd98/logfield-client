import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export default class RenderGithub extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>github</div>
      `, component.shadowRoot
    );
  }
}
