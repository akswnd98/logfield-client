import RenderLogin from './Render';
import StyleLogin from './Style';
import OwlRenderIdTree, { IdTreeNodeType } from '@/webowl/OwlManipulator/OwlRenderIdTree';
import { emailLoginEmailModel } from '@/App/models';
import { emailLoginComponent } from '@/App/components';
import OwlRegisterInputModel from '@/webowl/OwlManipulator/OwlRegisterHandler/OwlRegisterInputModel';
import RegisterEmailLoginButtonClick from './RegisterEmailLoginButtonClick';

export type ConstructorParam = {
  idTreeNodes: IdTreeNodeType[];
};

export default class EmailLogin extends OwlRenderIdTree {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderLogin(),
        new StyleLogin(),
        new OwlRegisterInputModel({
          id: 'email',
          component: emailLoginComponent,
          model: emailLoginEmailModel
        }),
        new RegisterEmailLoginButtonClick({ emailLoginEmailModel })
      ],
      idTreeNodes: payload.idTreeNodes
    });
  }
}
