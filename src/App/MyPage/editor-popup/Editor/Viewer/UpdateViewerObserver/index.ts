import converter from '@/utils/mdHtmlConverter';
import OwlComponent from '@/webowl/OwlComponent';
import OwlObserver from '@/webowl/OwlObserver';

export type ConstructorParam = {
  viewerComponent: OwlComponent;
};

export default class UpdateViewerObserver extends OwlObserver<string> {
  protected viewerComponent: OwlComponent;

  constructor (payload: ConstructorParam) {
    super();
    this.viewerComponent = payload.viewerComponent;
  }

  async observe (data: string) {
    try {
      const element = this.viewerComponent.shadowRoot.getElementById('root');
      if (element === null) {
        throw `no such id: root in ${this.viewerComponent.shadowRoot}`;
      }
      element.innerHTML = (await converter.process(data)).toString();
    } catch (e) {
      console.log(e);
      throw 'UpdateViewerObserver failed';
    }
  }
}
