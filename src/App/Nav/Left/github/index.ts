import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderGithub from './Render';
import StyleGithub from './Style';

export default class Github extends OwlContainerManipulator {
  constructor () {
    super({
      manipulators: [
        new RenderGithub(),
        new StyleGithub()
      ]
    });
  }
}
