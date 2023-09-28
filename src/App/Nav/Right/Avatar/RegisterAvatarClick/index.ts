import { avatarContextModel } from '@/App/models';
import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';

export default class RegisterAvatarClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';

  constructor () {
    super({ id: 'root' });
  }

  async handle (event: MouseEvent) {
    avatarContextModel.setData({
      mode: !avatarContextModel.getData().mode,
      x: 'calc(100% - 280px)',
      y: '120px'
    });
  }
}
