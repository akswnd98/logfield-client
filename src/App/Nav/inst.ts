import Nav from '.';
import { navLeftComponent, navRightComponent } from '../components';
import RightInst from './Right/inst';
import LeftInst from './Left/inst';

export default class NavInst extends Nav {
  constructor () {
    super({
      children: [{
        component: navLeftComponent,
        manipulator: new LeftInst()
      }, {
        component: navRightComponent,
        manipulator: new RightInst()
      }]
    });
  }
}
