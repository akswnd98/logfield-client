import ContextMenuBody from '@/Popup/ContextMenu/ContextMenuBody';
import ContextMenuItem from '@/Popup/ContextMenu/ContextMenuBody/ContextMenuItem';
import OwlComponent from '@/webowl/OwlComponent';
import RegisterMyPageClick from './RegisterMyPageClick';
import RegisterLogoutClick from './RegisterLogoutClick';

export default class Body extends ContextMenuBody {
  constructor () {
    super({
      children: [{
        component: new OwlComponent(),
        manipulator: new ContextMenuItem({
          label: '마이페이지',
          additionalManipulators: [
            new RegisterMyPageClick()
          ]
        })
      }, {
        component: new OwlComponent(),
        manipulator: new ContextMenuItem({
          label: '로그아웃',
          additionalManipulators: [
            new RegisterLogoutClick()
          ]
        })
      }]
    });
  }
}
