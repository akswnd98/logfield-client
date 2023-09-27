import { ChildType } from '@/webowl/OwlManipulator/OwlRenderContainer';
import OwlDefaultLayout from '@/webowl/OwlManipulator/OwlRenderContainer/OwlLayout/OwlDefaultLayout';
import OwlRootContainer, { ConstructorParam as ParentConstructorParam } from '@/webowl/OwlManipulator/OwlRenderContainer/OwlRootContainer';
import StyleLeft from './Style';

export type ConstructorParam = {
  children: ChildType[];
};

export default class Left extends OwlRootContainer {
  constructor (payload: ConstructorParam) {
    super({
      layout: new OwlDefaultLayout(),
      manipulators: [new StyleLeft()],
      children: payload.children
    });
  }
}
