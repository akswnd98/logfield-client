import OwlComponent from '@/owl-mo/OwlComponent';
import OwlOperator from '@/owl-mo/OwlOperator';
import { html, render } from 'lit-html';

export default class RenderMain extends OwlOperator<OwlComponent> {
  render () {
    render(
      html`
        <div id='root'>nice</div>
      `, this.data.shadowRoot
    );
  }
}
