import { emailSignupPopupModel, loginEntryPopupModel } from '@/App/models';
import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';

export default class RegisterClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';

  constructor () {
    super({ id: 'root' });
  }

  async handle (event: MouseEvent) {
    await loginEntryPopupModel.setData(false);
    await emailSignupPopupModel.setData(true);
  }
}
