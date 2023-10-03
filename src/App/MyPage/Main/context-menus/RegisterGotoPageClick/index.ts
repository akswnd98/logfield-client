import { PUBLIC_URL } from '@/environment';
import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';
import { contextedNodeModel } from '@/App/MyPage/models';

export default class RegisterGotoPageClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';

  constructor () {
    super({ id: 'root' });
  }

  async handle (event: MouseEvent) {
    try {
      location.href = `${PUBLIC_URL}/post/?id=${contextedNodeModel.getData()}`;
    } catch (e) {
      console.log(e);
      throw 'RegisterGotoPageClick failed';
    }
  }
}
