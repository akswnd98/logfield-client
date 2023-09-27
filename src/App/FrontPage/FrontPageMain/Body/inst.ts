import OwlComponent from '@/webowl/OwlComponent';
import Body from '.';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

export default class BodyInst extends Body {
  constructor () {
    super({
      children: [{
        component: new OwlComponent(),
        manipulator: new FirstSection()
      }, {
        component: new OwlComponent(),
        manipulator: new SecondSection()
      }]
    });
  }
}
