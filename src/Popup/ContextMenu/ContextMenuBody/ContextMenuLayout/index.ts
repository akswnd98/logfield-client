import OwlComponent from '@/webowl/OwlComponent';
import { ChildType } from '@/webowl/OwlManipulator/OwlRenderContainer';
import OwlLayout from '@/webowl/OwlManipulator/OwlRenderContainer/OwlLayout';

export default class ContextMenuLayout extends OwlLayout {
  async manipulate (component: OwlComponent, children: ChildType[]) {
    for (let i = 0; i < children.length; i++) {
      const root = component.shadowRoot.getElementById('root')!;
      root.appendChild(children[i].component);
      if (i < children.length - 1) {
        root.appendChild(document.createElement('hr'));
      }
    }
  }
}
