import OwlManipulator from '@/webowl/OwlManipulator';
import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderContextMenuItem from './RenderContextMenuItem';
import StyleContextMenuItem from './StyleContextMenuItem';

export type ConstructorParam = {
  label: string;
  additionalManipulators: OwlManipulator[];
};

export default class ContextMenuItem extends OwlContainerManipulator {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderContextMenuItem({ label: payload.label }),
        new StyleContextMenuItem(),
        ...payload.additionalManipulators
      ]
    })
  }
}
