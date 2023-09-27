import OwlDefaultLayout from '@/webowl/OwlManipulator/OwlRenderContainer/OwlLayout/OwlDefaultLayout';
import OwlRootContainer from '@/webowl/OwlManipulator/OwlRenderContainer/OwlRootContainer';
import StyleBody from './Style';
import { ChildType } from '@/webowl/OwlManipulator/OwlRenderContainer';

export type ConstructorParam = {
  children: ChildType[];
};

export default class Body extends OwlRootContainer {
  constructor (payload: ConstructorParam) {
    super({
      layout: new OwlDefaultLayout(),
      children: payload.children,
      manipulators: [
        new StyleBody()
      ]
    });
  }
}
