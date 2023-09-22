import { emailLoginButtonComponent, socialLoginButtonComponent } from '@/App/components';
import LoginEntry from '.';
import SocialLoginButton from './SocialLoginButton';
import EmailLoginButton from './EmailLoginButton';
import RegisterEmailLoginPopupButtonClick from './EmailLoginButton/RegisterEmailLoginPopupButtonClick';
import { emailLoginPopupModel } from '@/App/models';

export default class LoginEntryInst extends LoginEntry {
  constructor () {
    super({
      idTreeNodes: [{
        id: 'social-login-button',
        component: socialLoginButtonComponent,
        manipulator: new SocialLoginButton({
          manipulators: []
        })
      }, {
        id: 'email-login-button',
        component: emailLoginButtonComponent,
        manipulator: new EmailLoginButton({
          manipulators: [
            new RegisterEmailLoginPopupButtonClick({ emailLoginPopupModel })
          ]
        })
      }]
    })
  }
}
