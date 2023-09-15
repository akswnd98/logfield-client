import { Network } from 'vis-network';

export default abstract class VisManipulator {
  abstract manipulate (network: Network): Promise<void>;
}
