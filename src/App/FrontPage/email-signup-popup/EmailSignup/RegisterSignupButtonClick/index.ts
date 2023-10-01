import { emailSignupEmailModel, emailSignupNicknameModel } from '@/App/models';
import { PUBLIC_URL } from '@/environment';
import requestSignupCertification from '@/utils/api/signup/requestCertification';
import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';

export default class RegisterSignupButtonClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';

  constructor () {
    super({ id: 'signup-button' });
  }

  async handle (event: MouseEvent) {
    await requestSignupCertification(emailSignupEmailModel.getData(), emailSignupNicknameModel.getData());
    location.href = `${PUBLIC_URL}/`;
  }
}
