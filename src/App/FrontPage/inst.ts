import FullScreenPopup from '@/Popup/FullScreenPopup';
import FrontPage from '.';
import { emailLoginComponent, frontPageMainComponent, loginEntryComponent, loginEntryPopupComponent, loginPopupComponent, socialLoginButtonComponent } from '../components';
import FrontPageMain from './FrontPageMain';
import {
  emailLoginPopupModel,
  loginEntryPopupModel,
  emailLoginEmailModel
} from '../models';
import RegisterFullScreenPopupObserver from '@/Popup/FullScreenPopup/RegisterFullScreenPopupObserver';
import EmailLogin from './email-login-popup/EmailLogin';
import OwlRegisterInputModel from '@/webowl/OwlManipulator/OwlRegisterHandler/OwlRegisterInputModel';
import RegisterEmailLoginButtonClick from './email-login-popup/EmailLogin/RegisterEmailLoginButtonClick';
import LoginEntryInst from './login-entry-popup/LoginEntry/inst';
import LoginEntryPopupInst from './login-entry-popup/inst';
import EmailLoginPopupInst from './email-login-popup/inst';

export default class FrontPageInst extends FrontPage {
  constructor () {
    super({
      idTreeNodes: [{
        id: 'main',
        component: frontPageMainComponent,
        manipulator: new FrontPageMain({
          idTreeNodes: []
        })
      }, {
        id: 'login-entry-popup',
        component: loginEntryPopupComponent,
        manipulator: new LoginEntryPopupInst()
      }, {
        id: 'email-login-popup',
        component: loginPopupComponent,
        manipulator: new EmailLoginPopupInst()
      }]
    });
  }
}
