import OwlComponent from '@/owl-mo/OwlComponent';
import OwlOperator from '..';
import OwlAttachGenerator from '@/owl-mo/OwlOperatorGenerator/OwlAttachGenerator';

export default class OwlRegisterParentComponent extends OwlOperator<OwlComponent> {
  register (attachGenerator: OwlAttachGenerator) {
    attachGenerator.registerParentComponent(this.data);
  }
}
