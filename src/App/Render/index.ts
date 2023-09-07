import OwlComponent from '@/owl-mo/OwlComponent';
import OwlOperator from '@/owl-mo/OwlOperator';
import { html, render } from 'lit-html';

export default class RenderApp extends OwlOperator<OwlComponent> {
  render () {
    render(
      html`
        <div id='root'>
          hello world
          <div id='main'></div>
        </div>
      `, this.data.shadowRoot
    );
  }
}
