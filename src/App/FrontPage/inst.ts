import FrontPage from '.';
import { frontPageMainComponent, loginEntryPopupComponent, loginPopupComponent } from '../components';
import LoginEntryPopupInst from './login-entry-popup/inst';
import EmailLoginPopupInst from './email-login-popup/inst';
import FrontPageMainInst from './FrontPageMain/inst';

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
      }]
    });
  }
}
