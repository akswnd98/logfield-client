import FullScreenPopup from '@/Popup/FullScreenPopup';
import { emailSignupPopupModel } from '@/App/models';
import RegisterFullScreenPopupObserver from '@/Popup/FullScreenPopup/RegisterFullScreenPopupObserver';
import EmailSignup from './EmailSignup';
import { emailSignupComponent } from '@/App/components';

export default class EmailSignupPopupInst extends FullScreenPopup {
  constructor () {
    super({
      body: new EmailSignup(),
      bodyComponent: emailSignupComponent,
      additionalManipulators: [
        new RegisterFullScreenPopupObserver({
          model: emailSignupPopupModel
        })
      ]
    });
  }
}
