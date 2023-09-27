import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '..';
import OwlLayout from './OwlLayout';
import OwlContainerManipulator from '../OwlContainerManipulator';

export type ChildType = {
  component: OwlComponent;
  manipulator: OwlManipulator;
};

export type ConstructorParam = {
  layout: OwlLayout;
  children: ChildType[];
  manipulators: OwlManipulator[];
};

export default class OwlRenderContainer extends OwlContainerManipulator {
  protected layout: OwlLayout;
  protected children: ChildType[];

  constructor (payload: ConstructorParam) {
    super({ manipulators: payload.manipulators });
    this.layout = payload.layout;
    this.children = payload.children;
  }

  async manipulate (component: OwlComponent) {
    await super.manipulate(component);
    await this.layout.manipulate(component, this.children);
    for (let child of this.children) {
      await child.manipulator.manipulate(child.component);
    }
  }
}
