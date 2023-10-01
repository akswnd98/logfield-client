import { emailLoginButtonComponent, socialLoginButtonComponent } from '@/App/components';
import LoginEntry from '.';
import EmailLoginButton from './EmailLoginButton';
import SocialLoginButton from './SocialLoginButton';
import RegisterEmailLoginPopupButtonClick from './EmailLoginButton/RegisterEmailLoginPopupButtonClick';
import { emailLoginPopupModel } from '@/App/models';
import OwlComponent from '@/webowl/OwlComponent';
import LogoButton from '@/LogoButton';
import EmailSignupButton from './EmailSignupButton';

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
        id: 'email-signup-button',
        component: new OwlComponent(),
        manipulator: new EmailSignupButton()
      },
      // {
      //   id: 'social-login-button',
      //   component: socialLoginButtonComponent,
      //   manipulator: new SocialLoginButton({
      //     manipulators: []
      //   })
      // },
      {
        id: 'logo',
        component: new OwlComponent(),
        manipulator: new LogoButton()
      }]
    });
  }
}
