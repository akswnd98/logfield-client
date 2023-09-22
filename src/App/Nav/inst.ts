import Nav from '.';
import { avatarComponent, loginButtonComponent } from '../components';
import LoginButton from './LoginButton';
import RegisterLoginButtonClick from './LoginButton/RegisterLoginButtonClick';
import { loginEntryPopupModel } from '../models';
import AvatarInst from './Avatar/inst';

export default class NavInst extends Nav {
  constructor () {
    super({
      idTreeNodes: [{
        id: 'login-button',
        component: loginButtonComponent,
        manipulator: new LoginButton({
          manipulators: [
            new RegisterLoginButtonClick({ loginEntryPopupModel })
          ]
        })
      }, {
        id: 'avatar',
        component: avatarComponent,
        manipulator: new AvatarInst()
      }]
    })
  }
}
