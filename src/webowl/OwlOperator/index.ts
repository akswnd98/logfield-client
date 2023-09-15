export default abstract class OwlOperator<DataType> {
  abstract operate (data: DataType): Promise<void>;
}
