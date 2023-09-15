import { Network } from 'vis-network';
import VisManipulator from '..';

export type ConstructorParam = {
  manipulators: VisManipulator[];
};

export default class VisContainerManipulator extends VisManipulator {
  protected manipulators: VisManipulator[];

  constructor (payload: ConstructorParam) {
    super();
    this.manipulators = payload.manipulators;
  }

  async manipulate (network: Network) {
    for (let manipulator of this.manipulators) {
      await manipulator.manipulate(network);
    }
  }
}
