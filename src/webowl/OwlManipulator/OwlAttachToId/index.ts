import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';

export type ConstructorParam = {
  component: OwlComponent;
  id: string;
};

export default class OwlAttachToId extends OwlManipulator {
  protected component: OwlComponent;
  protected id: string;

  constructor (payload: ConstructorParam) {
    super();
    this.component = payload.component;
    this.id = payload.id;
  }

  async manipulate (component: OwlComponent) {
    try {
      const container = component.shadowRoot.getElementById(this.id) as HTMLElement | null;
      if (container === null) {
        throw `no such id "${this.id}" in ${component.shadowRoot}`;
      }
      container.appendChild(this.component);
    } catch (e) {
      console.log(e);
      throw 'AttachToId failed';
    }
  }
}
