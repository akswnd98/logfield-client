import OwlComponent from '@/owl-render/OwlComponent';
import OwlOperator, { ConstructorParam as ParentConstructorParam} from '@/owl-render/OwlOperator';
import OwlOperatorGenerator from '@/owl-render/OwlOperatorGenerator';

export type ConstructorParam = {
  parentComponent: OwlComponent;
} & ParentConstructorParam;

export default abstract class OwlAttach extends OwlOperator {
  protected parentComponent: OwlComponent;

  constructor (payload: ConstructorParam) {
    super({...payload});
    this.parentComponent = payload.parentComponent;
  }

  abstract attach (): void;
}

export type GeneratorConstructorParam = {
  parentComponent: OwlComponent;
};

export abstract class OwlAttachGenerator extends OwlOperatorGenerator {
  protected parentComponent: OwlComponent;

  constructor (payload: GeneratorConstructorParam) {
    super();
    this.parentComponent = payload.parentComponent;
  }
}