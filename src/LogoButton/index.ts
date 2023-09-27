import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderLogo from './Render';
import StyleLogo from './Style';
import RegisterClick from './RegisterClick';

export default class LogoButton extends OwlContainerManipulator {
  constructor () {
    super({
      manipulators: [
        new RenderLogo(),
        new StyleLogo(),
        new RegisterClick()
      ]
    });
  }
}
