import OwlComponent from '@/webowl/OwlComponent';
import OwlObserver from '@/webowl/OwlObserver';

export type ConstructorParam = {
  component: OwlComponent;
};

export default class UpdateTitleObserver extends OwlObserver<string> {
  protected component: OwlComponent;

  constructor (payload: ConstructorParam) {
    super();
    this.component = payload.component;
  }

  async observe (data: string) {
    try {
      const element = this.component.shadowRoot.getElementById('title-input') as HTMLInputElement | null;
      if (element === null) {
        throw `no such id: "title-input" in ${this.component.shadowRoot}`;
      }
      element.value = data;
    } catch (e) {
      console.log(e);
    }
  }
}
