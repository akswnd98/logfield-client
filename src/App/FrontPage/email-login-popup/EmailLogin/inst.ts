import OwlComponent from '@/webowl/OwlComponent';
import EmailLogin from '.';
import LogoButton from '@/LogoButton';

export default class EmailLoginInst extends EmailLogin {
  constructor () {
    super({
      idTreeNodes: [{
        id: 'logo',
        component: new OwlComponent(),
        manipulator: new LogoButton()
      }]
    });
  }
}
