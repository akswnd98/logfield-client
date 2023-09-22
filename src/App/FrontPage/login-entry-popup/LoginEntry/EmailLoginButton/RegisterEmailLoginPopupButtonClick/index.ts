import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export type ConstructorParam = {
  emailLoginPopupModel: OwlSimpleModel<boolean>;
};

export default class RegisterEmailLoginPopupButtonClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';

  protected emailLoginPopupModel: OwlSimpleModel<boolean>;

  constructor (payload: ConstructorParam) {
    super({ id: 'root' });
    this.emailLoginPopupModel = payload.emailLoginPopupModel;
  }

  async handle (event: MouseEvent) {
    this.emailLoginPopupModel.setData(true);
  }
}
