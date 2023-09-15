import OwlComponent from '@/webowl/OwlComponent';
import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export type ConstructorParam = {
  component: OwlComponent;
  editorTitleModel: OwlSimpleModel<string>;
};

export default class RegisterTitleInput extends OwlRegisterHandler<'input'> {
  protected eventName: 'input' = 'input';
  protected component: OwlComponent;
  protected editorTitleModel: OwlSimpleModel<string>;
  
  constructor (payload: ConstructorParam) {
    super({ id: 'title-input' });
    this.component = payload.component;
    this.editorTitleModel = payload.editorTitleModel;
  }

  async handle (event: Event) {
    try {
      const element = this.component.shadowRoot.getElementById('title-input') as HTMLInputElement | null;
      if (element === null) {
        throw `no such id: "title-input" in ${this.component.shadowRoot}`;
      }
      if (this.editorTitleModel.getData() === element.value) {
        return;
      }
      this.editorTitleModel.setData(element.value);
    } catch (e) {
      console.log(e);
    }
  }
}
