import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderFooter from './Render';
import StyleFooter from './Style';

export default class Footer extends OwlContainerManipulator {
  constructor () {
    super({
      manipulators: [
        new RenderFooter(),
        new StyleFooter()
      ]
    });
  }
}
