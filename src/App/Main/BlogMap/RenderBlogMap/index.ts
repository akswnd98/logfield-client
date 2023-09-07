import OwlComponent from '@/owl-mo/OwlComponent';
import { html, render } from 'lit-html';
import OwlOperator, { ConstructorParam as ParentConstructorParam } from '@/owl-mo/OwlOperator';

export type ConstructorParam = {

} & ParentConstructorParam<OwlComponent>;

export default class RenderBlogMap extends OwlOperator<OwlComponent> {
  constructor (payload: ConstructorParam) {
    super({ ...payload });
  }
  render () {
    render(
      html`
        <div id='root'></div>
      `, this.data.shadowRoot
    );
  }
}
