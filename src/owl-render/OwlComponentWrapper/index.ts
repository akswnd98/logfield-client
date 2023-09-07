import OwlComponent from '../OwlComponent';
import OwlOperatorGenerator from '../OwlOperatorGenerator';

export default class OwlComponentWrapper {
  protected component: OwlComponent;

  constructor () {
    this.component = new OwlComponent();
  }

  generateOperator (generator: OwlOperatorGenerator) {
    return generator.generate(this.component);
  }
}
