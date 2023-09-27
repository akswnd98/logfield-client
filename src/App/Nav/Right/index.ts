import { ChildType } from '@/webowl/OwlManipulator/OwlRenderContainer';
import OwlDefaultLayout from '@/webowl/OwlManipulator/OwlRenderContainer/OwlLayout/OwlDefaultLayout';
import OwlRootContainer, { ConstructorParam as ParentConstructorParam } from '@/webowl/OwlManipulator/OwlRenderContainer/OwlRootContainer';

export type ConstructorParam = {
  children: ChildType[];
};

export default class Right extends OwlRootContainer {
  constructor (payload: ConstructorParam) {
    super({
      layout: new OwlDefaultLayout(),
      manipulators: [],
      children: payload.children
    });
  }
}
