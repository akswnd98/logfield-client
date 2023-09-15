import OwlManipulator from '@/webowl/OwlManipulator';
import Popup from '..';
import StyleFullScreenPopup from './Style';
import OwlComponent from '@/webowl/OwlComponent';

export type ConstructorParam = {
  bodyComponent: OwlComponent;
  body: OwlManipulator;
  additionalManipulators: OwlManipulator[];
};

export default class FullScreenPopup extends Popup {
  constructor (payload: ConstructorParam) {
    super({
      bodyComponent: payload.bodyComponent,
      body: payload.body,
      additionalManipulators: [
        new StyleFullScreenPopup(),
        ...payload.additionalManipulators
      ]
    });
  }
}
