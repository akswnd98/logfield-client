import OwlComponent from '@/owl-mo/OwlComponent';
import OwlOperatorGenerator from '..';
import OwlRegisterParentComponent from '@/owl-mo/OwlOperator/OwlRegisterParentComponent';

export default class OwlRegisterParentComponentGenerator extends OwlOperatorGenerator<OwlComponent> {
  generate (data: OwlComponent) {
    return new OwlRegisterParentComponent({ data });
  }
}
