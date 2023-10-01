import FrontPage from '.';
import { frontPageMainComponent, loginEntryPopupComponent, loginPopupComponent } from '../components';
import LoginEntryPopupInst from './login-entry-popup/inst';
import EmailLoginPopupInst from './email-login-popup/inst';
import FrontPageMainInst from './FrontPageMain/inst';
import OwlComponent from '@/webowl/OwlComponent';
import EmailSignupPopupInst from './email-signup-popup/inst';

export default class FrontPageInst extends FrontPage {
  constructor () {
    super({
      idTreeNodes: [{
        id: 'main',
        component: frontPageMainComponent,
        manipulator: new FrontPageMainInst()
      }, {
        id: 'login-entry-popup',
        component: loginEntryPopupComponent,
        manipulator: new LoginEntryPopupInst()
      }, {
        id: 'email-login-popup',
        component: loginPopupComponent,
        manipulator: new EmailLoginPopupInst()
      }, {
        id: 'email-signup-popup',
        component: new OwlComponent(),
        manipulator: new EmailSignupPopupInst()
      }]
    });
  }
}
