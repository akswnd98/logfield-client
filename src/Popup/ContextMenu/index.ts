import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderContextMenu from './Render';
import StyleContextMenu from './Style';
import ContextMenuBody from './ContextMenuBody';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';
import ContextMenuModelType from './ContextMenuModelType';
import RegisterContextMenuObserver from './RegisterContextMenuObserver';
import OwlComponent from '@/webowl/OwlComponent';

export type ConstructorParam = {
  model: OwlSimpleModel<ContextMenuModelType>;
  body: ContextMenuBody;
  bodyComponent: OwlComponent;
};

export default class ContextMenu extends OwlContainerManipulator {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderContextMenu({ body: payload.body, bodyComponent: payload.bodyComponent, additionalManipulators: [] }),
        new StyleContextMenu(),
        new RegisterContextMenuObserver({ model: payload.model }),
      ]
    });
  }
}
