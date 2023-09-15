import OwlObserver from '@/webowl/OwlObserver';
import { Network } from 'vis-network';

export type ConstructorParam = {
  network: Network;
};

export default class UpdateEditEdgeModeObserver extends OwlObserver<boolean> {
  protected network: Network;

  constructor (payload: ConstructorParam) {
    super();
    this.network = payload.network;
  }

  async observe (data: boolean) {
    if (!data) {
      this.network.enableEditMode();
      this.network.addEdgeMode();
    } else {
      this.network.disableEditMode();
    }
  }
}
