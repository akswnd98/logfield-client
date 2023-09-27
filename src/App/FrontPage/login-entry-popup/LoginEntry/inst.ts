import { emailLoginButtonComponent, socialLoginButtonComponent } from '@/App/components';
import LoginEntry from '.';
import EmailLoginButton from './EmailLoginButton';
import SocialLoginButton from './SocialLoginButton';
import RegisterEmailLoginPopupButtonClick from './EmailLoginButton/RegisterEmailLoginPopupButtonClick';
import { emailLoginPopupModel } from '@/App/models';
import OwlComponent from '@/webowl/OwlComponent';
import LogoButton from '@/LogoButton';

export default class LoginEntryInst extends LoginEntry {
  constructor () {
    super({
      idTreeNodes: [{
        id: 'email-login-button',
        component: emailLoginButtonComponent,
        manipulator: new EmailLoginButton({
          manipulators: [
            new RegisterEmailLoginPopupButtonClick({
              emailLoginPopupModel
            })
          ]
        })
      }, {
        id: 'social-login-button',
        component: socialLoginButtonComponent,
        manipulator: new SocialLoginButton({
          manipulators: []
        })
      }, {
        id: 'logo',
        component: new OwlComponent(),
        manipulator: new LogoButton()
      }]
    });
  }
}
