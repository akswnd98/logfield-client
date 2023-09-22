import RenderLogin from './Render';
import StyleLogin from './Style';
import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import OwlManipulator from '@/webowl/OwlManipulator';

export type ConstructorParam = {
  manipulators: OwlManipulator[];
};

export default class EmailLogin extends OwlContainerManipulator {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderLogin(),
        new StyleLogin(),
        ...payload.manipulators
      ]
    });
  }
}
