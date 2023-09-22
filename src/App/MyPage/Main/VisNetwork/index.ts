import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderVisNetwork from './Render';
import StyleVisNetwork from './Style';

export default class VisNetwork extends OwlContainerManipulator {
  constructor () {
    super({
      manipulators: [
        new RenderVisNetwork(),
        new StyleVisNetwork()
      ]
    });
  }
}
