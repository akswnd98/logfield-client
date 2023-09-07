import OwlComponent from '@/owl-render/OwlComponent';
import OwlOperator from '@/owl-render/OwlOperator';
import OwlOperatorGenerator from '@/owl-render/OwlOperatorGenerator';
import { html, render } from 'lit-html';

export default class RenderApp extends OwlOperator {
  render () {
    render(
      html`
        <div id='root'>hello world</div>
      `, this.component.shadowRoot
    );
  }
}

export class RenderAppGenerator extends OwlOperatorGenerator {
  generate (component: OwlComponent) {
    return new RenderApp({ component });
  }
}
