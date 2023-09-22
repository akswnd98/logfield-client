import OwlManipulator from '@/webowl/OwlManipulator';
import RenderSocialLoginButton from './Render';
import StyleSocialLoginButton from './Style';
import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';


export type ConstructorParam = {
  manipulators: OwlManipulator[];
};

export default class SocialLoginButton extends OwlContainerManipulator {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderSocialLoginButton(),
        new StyleSocialLoginButton(),
        ...payload.manipulators
      ]
    });
  }
}
