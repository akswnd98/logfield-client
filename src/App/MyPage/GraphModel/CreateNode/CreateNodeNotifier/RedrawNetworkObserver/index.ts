import OwlObserver from '@/webowl/OwlObserver';
import { CreateNodeNotificationType } from '..';
import MyPageNetwork from '@/App/MyPage/models/MyPageNetwork';

export default class RedrawNetworkObserver extends OwlObserver<CreateNodeNotificationType> {
  async observe (data: CreateNodeNotificationType) {
    setTimeout(() => {
      try {
        MyPageNetwork.getInstance().redraw();
      } catch (e) {
        console.log(e);
        throw 'RedrawNetworkObserver failed';
      }
    }, 10);
  }
}
