import FullScreenPopup from '@/Popup/FullScreenPopup';
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
