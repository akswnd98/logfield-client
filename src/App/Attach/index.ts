import OwlComponent from '@/owl-mo/OwlComponent';
import OwlOperator, { ConstructorParam as ParentConstructorParam} from '@/owl-mo/OwlOperator';
import { html, render } from 'lit-html';

export type ConstructorParam = {
  rootElement: HTMLDivElement;
} & ParentConstructorParam<OwlComponent>;

export default class AttachApp extends OwlOperator<OwlComponent> {
  protected rootElement: HTMLDivElement;

  constructor (payload: ConstructorParam) {
    super({ ...payload });
    this.rootElement = payload.rootElement;
  }

  attach () {
    render(
      html`
        ${this.data}
      `, this.rootElement
    );
  }
}
