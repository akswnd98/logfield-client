import OwlComponent from '@/webowl/OwlComponent';
import OwlContainerManipulator from '../../OwlContainerManipulator';
import OwlAttachToId from '..';
import OwlManipulator from '../..';

export type PairType = {
  id: string;
  component: OwlComponent;
};

export type ConstructorParam = {
  pairs: PairType[];
};

export default class OwlContainerAttachToId extends OwlContainerManipulator {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: payload.pairs.map((v) => new OwlAttachToId({ ...v }))
    });
  }
}
