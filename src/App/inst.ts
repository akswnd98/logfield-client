import App from '.';
import { myPageComponent } from './MyPage/components';
import MyPageInst from './MyPage/inst';
import NavInst from './Nav/inst';
import { backgroundComponent, frontPageComponent, mainComponent, navComponent } from './components';
import FrontPageInst from './FrontPage/inst';
import OwlRouter from '@/webowl/OwlManipulator/OwlRouter';
import { PUBLIC_URL } from '@/environment';

export default class AppInst extends App {
  constructor () {
    super({
      idTreeNodes: [{
        id: 'nav',
        component: navComponent,
        manipulator: new NavInst()
      }, {
        id: 'main',
        component: mainComponent,
        manipulator: new OwlRouter({
          routes: [{
            pattern: new RegExp(`^${PUBLIC_URL}/$`),
            component: frontPageComponent,
            manipulator: new FrontPageInst()
          }, {
            pattern: new RegExp(`^${PUBLIC_URL}/my-page/$`),
            component: myPageComponent,
            manipulator: new MyPageInst()
          }]
        })
      }]
    })
  }
}
