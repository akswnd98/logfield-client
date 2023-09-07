import OwlOperatorGenerator from '../OwlOperatorGenerator';

export type ConstructorParam<DataType> = {
  data: DataType;
};

export default abstract class OwlModel<DataType> {
  protected abstract data: DataType;

  generateOperator (generator: OwlOperatorGenerator<DataType>) {
    return generator.generate(this.data);
  }
}
