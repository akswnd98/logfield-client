import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderIntro from './Render';
import StyleIntro from './Style';

export default class Intro extends OwlContainerManipulator {
  constructor () {
    super({
      manipulators: [
        new RenderIntro(),
        new StyleIntro()
      ]
    });
  }
}
