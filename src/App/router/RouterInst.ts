import OwlRouter from '@/webowl/OwlManipulator/OwlRouter';
import FrontPageInst from '../FrontPage/inst';
import { frontPageComponent } from '../components';

export default class RouterInst extends OwlRouter {
  constructor () {
    super({
      routes: [{
        pattern: /^\/$/,
        component: frontPageComponent,
        manipulator: new FrontPageInst()
      }]
    });
  }
}
