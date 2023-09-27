import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export type ConstructorParam = {
  loginEntryPopupModel: OwlSimpleModel<boolean>;
};

export default class RegisterLoginButtonClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';

  protected loginEntryPopupModel: OwlSimpleModel<boolean>;

  constructor (payload: ConstructorParam) {
    super({ id: 'root' });
    this.loginEntryPopupModel = payload.loginEntryPopupModel;
  }

  async handle (event: MouseEvent) {
    this.loginEntryPopupModel.setData(true);
  }
}
