import LogoButton from '@/LogoButton';
import OwlComponent from '@/webowl/OwlComponent';
import OwlRenderIdTree from '@/webowl/OwlManipulator/OwlRenderIdTree';
import RenderEmailSignup from './Render';
import StyleEmailSignup from './Style';
import RegisterSignupButtonClick from './RegisterSignupButtonClick';
import OwlRegisterInputModel from '@/webowl/OwlManipulator/OwlRegisterHandler/OwlRegisterInputModel';
import { emailSignupComponent } from '@/App/components';
import { emailSignupEmailModel, emailSignupNicknameModel } from '@/App/models';

export default class EmailSignup extends OwlRenderIdTree {
  constructor () {
    super({
      idTreeNodes: [{
        id: 'email',
        component: new OwlComponent(),
        manipulator: new LogoButton()
      }],
      manipulators: [
        new RenderEmailSignup(),
        new StyleEmailSignup(),
        new RegisterSignupButtonClick(),
        new OwlRegisterInputModel({
          id: 'email',
          component: emailSignupComponent,
          model: emailSignupEmailModel
        }),
        new OwlRegisterInputModel({
          id: 'nickname',
          component: emailSignupComponent,
          model: emailSignupNicknameModel
        }),
      ]
    })
  }
}
