import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';

export default class RegisterMyPageClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';

  constructor () {
    super({ id: 'root' });
  }

  async handle (event: MouseEvent) {
    location.href = '/my-page/';
  }
}
