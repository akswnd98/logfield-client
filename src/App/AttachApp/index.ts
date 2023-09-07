import OwlComponent from '@/owl-render/OwlComponent';
import OwlOperator, { ConstructorParam as ParentConstructorParam} from '@/owl-render/OwlOperator';
import OwlOperatorGenerator from '@/owl-render/OwlOperatorGenerator';
import { html, render } from 'lit-html';

export type ConstructorParam = {
  rootElement: HTMLDivElement;
} & ParentConstructorParam;

export default class AttachApp extends OwlOperator {
  protected rootElement: HTMLDivElement;

  constructor (payload: ConstructorParam) {
    super({ ...payload });
    this.rootElement = payload.rootElement;
  }

  attach () {
    render(
      html`
        ${this.component}
      `, this.rootElement
    );
  }
}

export type GeneratorConstructorParam = {
  rootElement: HTMLDivElement;
};

export class AttachAppGenerator extends OwlOperatorGenerator {
  protected rootElement: HTMLDivElement;

  constructor (payload: GeneratorConstructorParam) {
    super();
    this.rootElement = payload.rootElement;
  }

  generate (component: OwlComponent) {
    return new AttachApp({ component, rootElement: this.rootElement });
  }
}
