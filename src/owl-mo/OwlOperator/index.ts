export type ConstructorParam<DataType> = {
  data: DataType;
};

export default class OwlOperator<DataType> {
  protected data: DataType;

  constructor (payload: ConstructorParam<DataType>) {
    this.data = payload.data;
  }
}
