import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderFirstSection from './Render';
import StyleFirstSection from './Style';

export default class FirstSection extends OwlContainerManipulator {
  constructor () {
    super({
      manipulators: [
        new RenderFirstSection(),
        new StyleFirstSection()
      ]
    });
  }
}
