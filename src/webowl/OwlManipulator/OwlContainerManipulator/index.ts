import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '..';

export type ConstructorParam = {
  manipulators: OwlManipulator[];
};

export default class OwlContainerManipulator extends OwlManipulator {
  protected manipulators: OwlManipulator[];

  constructor (payload: ConstructorParam) {
    super();
    this.manipulators = payload.manipulators;
  }

  async manipulate (component: OwlComponent) {
    for (let i = 0; i < this.manipulators.length; i++) {
      await this.manipulators[i].manipulate(component);
    }
  }

  registerManipulator (manipulator: OwlManipulator) {
    this.manipulators.push(manipulator);
  }
}