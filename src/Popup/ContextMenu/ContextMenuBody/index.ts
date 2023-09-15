import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderContextMenuBody from './RenderContextMenuBody';
import StyleContextMenuBody from './StyleContextMenuBody';
import OwlManipulator from '@/webowl/OwlManipulator';
import OwlComponent from '@/webowl/OwlComponent';
import ContextMenuItem from './ContextMenuItem';

export type ConstructorParam = {
  manipulateMenuItems: ContextMenuItem[];
};

export default class ContextMenuBody extends OwlContainerManipulator {
  protected manipulateMenuItems: OwlManipulator[];

  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderContextMenuBody(),
        new StyleContextMenuBody()
      ]
    });
    this.manipulateMenuItems = payload.manipulateMenuItems;
  }

  async manipulate (component: OwlComponent) {
    await super.manipulate(component);
    for (let manipulateMenuItem of this.manipulateMenuItems) {
      const itemComponent = new OwlComponent();
      await manipulateMenuItem.manipulate(itemComponent);
      component.shadowRoot.getElementById('root')!.appendChild(itemComponent);
    }
  }
}
