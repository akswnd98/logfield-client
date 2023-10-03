import { PUBLIC_URL } from '@/environment';
import logout from '@/utils/api/logout';
import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';

export default class RegisterLogoutClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';

  constructor () {
    super({ id: 'root' });
  }

  async handle (event: MouseEvent) {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken === null) {
        throw 'no refreshToken';
      }
      await logout(refreshToken);
      localStorage.clear();
      location.href = `${PUBLIC_URL}/`;
    } catch (e) {
      console.log(e);
      throw 'RegisterLogoutClick failed';
    }
  }
}
