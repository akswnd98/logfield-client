import { PUBLIC_URL } from '@/environment';
import requestLoginCertification from '@/utils/api/login/requestCertification';
import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export type ConstructorParam = {
  emailLoginEmailModel: OwlSimpleModel<string>;
};

export default class RegisterEmailLoginButtonClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';

  protected emailLoginEmailModel: OwlSimpleModel<string>;

  constructor (payload: ConstructorParam) {
    super({ id: 'login-button' });
    this.emailLoginEmailModel = payload.emailLoginEmailModel;
  }

  async handle (event: MouseEvent) {
    await requestLoginCertification(this.emailLoginEmailModel.getData());
    location.href = `${PUBLIC_URL}`;
  }
}