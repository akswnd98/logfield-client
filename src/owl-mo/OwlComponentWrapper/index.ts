import OwlComponent from '../OwlComponent';
import OwlModel from '../OwlModel';
import OwlOperatorGenerator from '../OwlOperatorGenerator';

export default class OwlComponentWrapper extends OwlModel<OwlComponent> {
  protected data: OwlComponent;

  constructor () {
    super();
    this.data = new OwlComponent();
  }

  generateOperator (generator: OwlOperatorGenerator<OwlComponent>) {
    return generator.generate(this.data);
  }
}
