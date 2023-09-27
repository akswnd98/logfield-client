import OwlManipulator from '@/webowl/OwlManipulator';
import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import StyleLoginButton from './Style';
import RenderLoginButton from './Renderer';

export type ConstructorParam = {
  manipulators: OwlManipulator[];
};

export default class LoginButton extends OwlContainerManipulator {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderLoginButton(),
        new StyleLoginButton(),
        ...payload.manipulators
      ]
    });
  }
}
