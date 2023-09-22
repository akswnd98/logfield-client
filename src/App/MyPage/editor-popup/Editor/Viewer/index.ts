import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderViewer from './Render';
import StyleViewer from './Style';
import StyleKatex from './StyleKatex';

export default class Viewer extends OwlContainerManipulator {
  constructor () {
    super({
      manipulators: [
        new RenderViewer(),
        new StyleViewer(),
        new StyleKatex()
      ]
    });
  }
}
