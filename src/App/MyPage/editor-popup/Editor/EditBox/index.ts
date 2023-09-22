import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderEditBox from './Render';

export default class EditBox extends OwlContainerManipulator {
  constructor () {
    super({
      manipulators: [
        new RenderEditBox()
      ]
    });
  }
}
