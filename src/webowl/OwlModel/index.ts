import Operator from '../OwlOperator';

export default abstract class OwlModel<DataType> {
  protected abstract data: DataType;

  async operate (operator: Operator<DataType>) {
    await operator.operate(this.data);
  }
}
