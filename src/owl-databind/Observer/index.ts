export default abstract class Observer<DataType> {
  abstract observe (data: DataType): Promise<void>;
}
