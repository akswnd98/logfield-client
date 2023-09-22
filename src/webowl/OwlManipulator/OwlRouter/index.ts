import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '..';

export type RoutesType = {
  pattern: RegExp;
  component: OwlComponent;
  manipulator: OwlManipulator;
};

export type ConstructorParam = {
  routes: RoutesType[];
};

export default class OwlRouter extends OwlManipulator {
  protected routes: RoutesType[];

  constructor (payload: ConstructorParam) {
    super();
    this.routes = payload.routes;
  }

  async manipulate (component: OwlComponent) {
    for (let route of this.routes) {
      if (route.pattern.test(location.pathname)) {
        await route.manipulator.manipulate(route.component);
        component.shadowRoot.appendChild(route.component);
        break;
      }
    }
  }
}
