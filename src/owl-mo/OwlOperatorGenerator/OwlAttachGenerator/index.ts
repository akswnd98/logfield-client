import OwlComponent from '@/owl-mo/OwlComponent';
import OwlOperatorGenerator from '..';
import OwlRegisterParentComponent from '@/owl-mo/OwlOperator/OwlRegisterParentComponent';

export type ConstructorParam = {
  registerParentComponent: OwlRegisterParentComponent;
};

export default abstract class OwlAttachGenerator extends OwlOperatorGenerator<OwlComponent> {
  protected parentComponent!: OwlComponent;

  constructor (payload: ConstructorParam) {
    super();
    payload.registerParentComponent.register(this);
  }

  registerParentComponent (parentComponent: OwlComponent) {
    this.parentComponent = parentComponent;
  }
}
