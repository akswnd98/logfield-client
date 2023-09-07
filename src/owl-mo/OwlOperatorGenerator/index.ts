import OwlOperator from '../OwlOperator';

export default abstract class OwlOperatorGenerator<DataType> {
  abstract generate (data: DataType): OwlOperator<DataType>;
}
