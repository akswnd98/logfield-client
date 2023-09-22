import OwlSimpleModel from '@/webowl/OwlSimpleModel';
import OwlRegisterHandler, { ConstructorParam as ParentConstructorParam } from '..';
import OwlComponent from '@/webowl/OwlComponent';

export type ConstructorParam = {
  model: OwlSimpleModel<string>;
  component: OwlComponent;
} & ParentConstructorParam;

export default class OwlRegisterInputModel extends OwlRegisterHandler<'input'> {
  protected eventName: 'input' = 'input';
  protected model: OwlSimpleModel<string>;
  protected component: OwlComponent;

  constructor (payload: ConstructorParam) {
    super({ id: payload.id });
    this.model = payload.model;
    this.component = payload.component;
    payload.component.shadowRoot.getElementById(payload.id)
  }

  async handle (event: Event) {
    try {
      const element = this.component.shadowRoot.getElementById(this.id) as HTMLInputElement | null;
      if (element === null) {
        throw `no such id: ${this.id}`;
      }
      if (this.model.getData() !== element.value) {
        await this.model.setData(element.value);
      }
    } catch (e) {
      console.log(e);
      throw 'OwlRegisterInputModel failed';
    }
  }
}
