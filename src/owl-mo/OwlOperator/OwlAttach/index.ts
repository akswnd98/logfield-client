import OwlComponent from '@/owl-mo/OwlComponent';
import OwlOperator, { ConstructorParam as ParentConstructorParam} from '@/owl-mo/OwlOperator';

export type ConstructorParam = {
  parentComponent: OwlComponent;
} & ParentConstructorParam<OwlComponent>;

export default abstract class OwlAttach extends OwlOperator<OwlComponent> {
  protected parentComponent: OwlComponent;

  constructor (payload: ConstructorParam) {
    super({ ...payload });
    this.parentComponent = payload.parentComponent;
  }

  abstract attach (): void;
}

export type GeneratorConstructorParam = {
  parentComponent: OwlComponent;
};
