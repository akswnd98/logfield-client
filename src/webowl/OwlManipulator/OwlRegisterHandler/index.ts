import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '..';

export type ConstructorParam = {
  id: string;
};

export default abstract class OwlRegisterHandler<Event extends keyof HTMLElementEventMap> extends OwlManipulator {
  protected abstract eventName: Event;
  protected id: string;

  constructor (payload: ConstructorParam) {
    super();
    this.id = payload.id;
  }

  async manipulate (component: OwlComponent) {
    try {
      const element = component.shadowRoot.getElementById(this.id);
      if (element === null) {
        throw 'no such id';
      }
      element.addEventListener(this.eventName, (event: HTMLElementEventMap[Event]) => { this.handle(event); });
    } catch (e: any) {
      console.log(e);
    }
  }

  abstract handle (event: HTMLElementEventMap[Event]): Promise<void>;
}
