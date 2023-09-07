import OwlComponent from '../OwlComponent';

export type ConstructorParam = {
  component: OwlComponent;
};

export default class OwlOperator {
  protected component: OwlComponent;

  constructor (payload: ConstructorParam) {
    this.component = payload.component;
  }
}
