import { backgroundContextMenuModel } from '@/App/MyPage/models';
import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export type ConstructorParam = {
  editEdgeModeModel: OwlSimpleModel<boolean>;
};

export default class RegisterToggleEditEdgeModeClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';
  protected editEdgeModeModel: OwlSimpleModel<boolean>;

  constructor (payload: ConstructorParam) {
    super({ id: 'root' });
    this.editEdgeModeModel = payload.editEdgeModeModel;
  }

  async handle (event: MouseEvent) {
    try {
      this.editEdgeModeModel.setData(!this.editEdgeModeModel.getData());
      backgroundContextMenuModel.setData({ mode: false, x: '0', y: '0'});
    } catch (e) {
      console.log(e);
      throw 'RegisterToggleEditModeClick failed';
    }
  }
}
