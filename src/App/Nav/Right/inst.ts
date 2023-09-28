import { loginEntryPopupModel, userProfileModel } from '@/App/models';
import Right from '.';
import { avatarComponent, loginButtonComponent } from '@/App/components';
import LoginButton from './LoginButton';
import RegisterLoginButtonClick from './LoginButton/RegisterLoginButtonClick';
import AvatarInst from './Avatar/inst';
import { ChildType } from '@/webowl/OwlManipulator/OwlRenderContainer';
import AvatarContextMenuInst from './AvatarContextMenu/inst';
import OwlComponent from '@/webowl/OwlComponent';

export default class RightInst extends Right {
  constructor () {
    super({
      children: [userProfileModel.getData().id < 0 ? {
        component: loginButtonComponent,
        manipulator: new LoginButton({
          manipulators: [
            new RegisterLoginButtonClick({
              loginEntryPopupModel
            })
          ]
        })
      } : undefined, userProfileModel.getData().id >= 0 ? {
        component: avatarComponent,
        manipulator: new AvatarInst()
      } : undefined, userProfileModel.getData().id >= 0 ? {
        component: new OwlComponent(),
        manipulator: new AvatarContextMenuInst()
      } : undefined].filter((v) => v !== undefined) as ChildType[]
    });
  }
}
