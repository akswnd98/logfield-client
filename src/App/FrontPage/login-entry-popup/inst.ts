import FullScreenPopup from '@/Popup/FullScreenPopup';
import LoginEntryInst from './LoginEntry/inst';
import { loginEntryComponent } from '@/App/components';
import RegisterFullScreenPopupObserver from '@/Popup/FullScreenPopup/RegisterFullScreenPopupObserver';
import { loginEntryPopupModel } from '@/App/models';

export default class LoginEntryPopupInst extends FullScreenPopup {
  constructor () {
    super({
      body: new LoginEntryInst(),
      bodyComponent: loginEntryComponent,
      additionalManipulators: [
        new RegisterFullScreenPopupObserver({
          model: loginEntryPopupModel
        })
      ]
    })
  }
}
