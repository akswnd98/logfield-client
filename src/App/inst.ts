import App from '.';
import { myPageComponent } from './MyPage/components';
import MyPageInst from './MyPage/inst';
import NavInst from './Nav/inst';
import { backgroundComponent, frontPageComponent, mainComponent, navComponent } from './components';
import FrontPageInst from './FrontPage/inst';
import OwlRouter from '@/webowl/OwlManipulator/OwlRouter';

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
            pattern: /^\/$/,
            component: frontPageComponent,
            manipulator: new FrontPageInst()
          }, {
            pattern: /^\/my-page\/$/,
            component: myPageComponent,
            manipulator: new MyPageInst()
          }]
        })
      }]
    })
  }
}
