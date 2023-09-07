import OwlComponent from '../OwlComponent';
import OwlOperator from '../OwlOperator';

export default abstract class OwlOperatorGenerator {
  abstract generate (component: OwlComponent): OwlOperator;
}