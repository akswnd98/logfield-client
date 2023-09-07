import OwlAttach from '@/owl-mo/OwlOperator/OwlAttach';
import { html, render } from 'lit-html';

export default class AttachMain extends OwlAttach {
  attach () {
    render(
      html`
        ${this.data}
      `, this.parentComponent.shadowRoot.getElementById('main')!
    );
  }
}
