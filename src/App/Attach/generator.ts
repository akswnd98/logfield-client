import OwlComponent from '@/owl-mo/OwlComponent';
import OwlOperatorGenerator from '@/owl-mo/OwlOperatorGenerator';
import AttachApp from '.';

export type GeneratorConstructorParam = {
  rootElement: HTMLDivElement;
};

export default class AttachAppGenerator extends OwlOperatorGenerator<OwlComponent> {
  protected rootElement: HTMLDivElement;

  constructor (payload: GeneratorConstructorParam) {
    super();
    this.rootElement = payload.rootElement;
  }

  generate (data: OwlComponent) {
    return new AttachApp({ data, rootElement: this.rootElement });
  }
}
