import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderContextMenuBody from './RenderContextMenuBody';
import StyleContextMenuBody from './StyleContextMenuBody';
import OwlManipulator from '@/webowl/OwlManipulator';
import OwlComponent from '@/webowl/OwlComponent';
import ContextMenuItem from './ContextMenuItem';
import OwlRootContainer from '@/webowl/OwlManipulator/OwlRenderContainer/OwlRootContainer';
import ContextMenuLayout from './ContextMenuLayout';
import { ChildType } from '@/webowl/OwlManipulator/OwlRenderContainer';

export type ConstructorParam = {
  children: ChildType[];
  // manipulateMenuItems: ContextMenuItem[];
};

export default class ContextMenuBody extends OwlRootContainer {
  constructor (payload: ConstructorParam) {
    super({
      layout: new ContextMenuLayout(),
      manipulators: [
        new RenderContextMenuBody(),
        new StyleContextMenuBody()
      ],
      children: payload.children
    });
  }
}
