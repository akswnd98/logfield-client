import FrontPageMain from '.';
import OwlComponent from '@/webowl/OwlComponent';
import BodyInst from './Body/inst';
import Footer from './Footer';

export default class FrontPageMainInst extends FrontPageMain {
  constructor () {
    super({
      idTreeNodes: [{
        id: 'body',
        component: new OwlComponent(),
        manipulator: new BodyInst()
      }, {
        id: 'footer',
        component: new OwlComponent(),
        manipulator: new Footer()
      }]
    });
  }
}
