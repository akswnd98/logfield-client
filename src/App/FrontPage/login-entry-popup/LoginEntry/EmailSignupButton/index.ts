import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderEmailSignupButton from './Render';
import StyleEmailSignupButton from './Style';
import RegisterClick from './RegisterClick';

export default class EmailSignupButton extends OwlContainerManipulator {
  constructor () {
    super({
      manipulators: [
        new RenderEmailSignupButton(),
        new StyleEmailSignupButton(),
        new RegisterClick()
      ]
    });
  }
}
