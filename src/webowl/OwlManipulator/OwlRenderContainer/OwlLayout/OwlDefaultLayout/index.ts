import OwlComponent from '@/webowl/OwlComponent';
import { ChildType } from '@/webowl/OwlManipulator/OwlRenderContainer';
import OwlLayout from '@/webowl/OwlManipulator/OwlRenderContainer/OwlLayout';

export default class OwlDefaultLayout extends OwlLayout {
  constructor () {
    super();
  }

  async manipulate (component: OwlComponent, children: ChildType[]) {
    try {
      const root = component.shadowRoot.getElementById('root');
      if (root === null) {
        throw 'no such id: root';
      }
      for (let child of children) {
        root.appendChild(child.component);
      }
    } catch (e) {
      console.log(e);
      throw 'OwlDefaultLayout failed';
    }
  }
}
