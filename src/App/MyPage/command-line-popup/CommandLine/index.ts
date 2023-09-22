import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderCommandLine from './Render';
import StyleCommandLine from './Style';
import OwlManipulator from '@/webowl/OwlManipulator';

export type ConstructorParam = {
  additionalManipulators: OwlManipulator[];
};

export default class CommandLine extends OwlContainerManipulator {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderCommandLine(),
        new StyleCommandLine(),
        ...payload.additionalManipulators
      ]
    });
  }
}
