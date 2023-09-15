import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderPopup from './Render';
import StylePopup from './Style';
import OwlManipulator from '@/webowl/OwlManipulator';
import OwlComponent from '@/webowl/OwlComponent';

export type ConstructorParam = {
  additionalManipulators: OwlManipulator[];
  bodyComponent: OwlComponent;
  body: OwlManipulator;
};

export default class Popup extends OwlContainerManipulator {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderPopup({ bodyComponent: payload.bodyComponent, body: payload.body }),
        new StylePopup(),
        ...payload.additionalManipulators
      ]
    });
  }
}
