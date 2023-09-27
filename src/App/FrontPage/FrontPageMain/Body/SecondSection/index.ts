import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderSecondSection from './Render';
import StyleSecondSection from './Style';

export default class SecondSection extends OwlContainerManipulator {
  constructor () {
    super({
      manipulators: [
        new RenderSecondSection(),
        new StyleSecondSection()
      ]
    });
  }
}
