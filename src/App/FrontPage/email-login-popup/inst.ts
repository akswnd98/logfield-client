import FullScreenPopup from '@/Popup/FullScreenPopup';
import EmailLogin from './EmailLogin';
import OwlRegisterInputModel from '@/webowl/OwlManipulator/OwlRegisterHandler/OwlRegisterInputModel';
import { emailLoginComponent } from '@/App/components';
import { emailLoginPopupModel } from '@/App/models';
import RegisterFullScreenPopupObserver from '@/Popup/FullScreenPopup/RegisterFullScreenPopupObserver';
import EmailLoginInst from './EmailLogin/inst';

export default class EmailLoginPopupInst extends FullScreenPopup {
  constructor () {
    super({
      body: new EmailLoginInst(),
      bodyComponent: emailLoginComponent,
      additionalManipulators: [
        new RegisterFullScreenPopupObserver({
          model: emailLoginPopupModel
        })
      ]
    });
  }
}
