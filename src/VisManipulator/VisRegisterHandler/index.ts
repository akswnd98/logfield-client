import { Network, NetworkEvents } from 'vis-network';
import VisManipulator from '..';

export default abstract class VisRegisterHandler<Event extends NetworkEvents> extends VisManipulator {
  protected abstract eventName: Event;

  async manipulate (network: Network) {
    network.on(this.eventName, async (params) => {
      await this.handle(params);
    });
  }

  protected abstract handle (params: any): Promise<void>;
}
