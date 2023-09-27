import { navGithubComponent, navIntroComponent, navLogoComponent } from '@/App/components';
import Left from '.';
import Intro from './Intro';
import Github from './github';
import LogoButton from '@/LogoButton';

export default class LeftInst extends Left {
  constructor () {
    super({
      children: [{
        component: navLogoComponent,
        manipulator: new LogoButton()
      }, {
        component: navIntroComponent,
        manipulator: new Intro()
      }, {
        component: navGithubComponent,
        manipulator: new Github()
      }]
    });
  }
}
