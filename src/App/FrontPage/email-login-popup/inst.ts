import FullScreenPopup from '@/Popup/FullScreenPopup';
import EmailLogin from './EmailLogin';
import OwlRegisterInputModel from '@/webowl/OwlManipulator/OwlRegisterHandler/OwlRegisterInputModel';
import { emailLoginComponent } from '@/App/components';
import { emailLoginEmailModel, emailLoginPopupModel } from '@/App/models';
import RegisterEmailLoginButtonClick from './EmailLogin/RegisterEmailLoginButtonClick';
import RegisterFullScreenPopupObserver from '@/Popup/FullScreenPopup/RegisterFullScreenPopupObserver';

export default class EmailLoginPopupInst extends FullScreenPopup {
  constructor () {
    super({
      body: new EmailLogin({
        manipulators: [
          new OwlRegisterInputModel({
            id: 'email',
            component: emailLoginComponent,
            model: emailLoginEmailModel
          }),
          new RegisterEmailLoginButtonClick({ emailLoginEmailModel })
        ]
      }),
      bodyComponent: emailLoginComponent,
      additionalManipulators: [
        new RegisterFullScreenPopupObserver({
          model: emailLoginPopupModel
        })
      ]
    });
  }
}
