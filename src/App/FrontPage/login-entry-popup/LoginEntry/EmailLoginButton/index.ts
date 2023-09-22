import RenderEmailLoginButton from './Render';
import StyleEmailLoginButton from './Style';
import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import OwlManipulator from '@/webowl/OwlManipulator';

export type ConstructorParam = {
  manipulators: OwlManipulator[];
};

export default class EmailLoginButton extends OwlContainerManipulator {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderEmailLoginButton(),
        new StyleEmailLoginButton(),
        ...payload.manipulators
      ]
    });
  }
}
