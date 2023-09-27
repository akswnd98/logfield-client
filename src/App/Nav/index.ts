import StyleNav from './Style';
import OwlRootContainer from '@/webowl/OwlManipulator/OwlRenderContainer/OwlRootContainer';
import OwlDefaultLayout from '@/webowl/OwlManipulator/OwlRenderContainer/OwlLayout/OwlDefaultLayout';
import { ChildType } from '@/webowl/OwlManipulator/OwlRenderContainer';

export type ConstructorParam = {
  children: ChildType[];
};

export default class Nav extends OwlRootContainer {
  constructor (payload: ConstructorParam) {
    super({
      layout: new OwlDefaultLayout(),
      children: payload.children,
      manipulators: [
        new StyleNav()
      ]
    })
  }
}
