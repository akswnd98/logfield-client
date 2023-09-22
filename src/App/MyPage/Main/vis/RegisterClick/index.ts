import ContextMenuModelType from '@/Popup/ContextMenu/ContextMenuModelType';
import VisRegisterHandler from '@/VisManipulator/VisRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export type ConstructorParam = {
  contextMenuModels: OwlSimpleModel<ContextMenuModelType>[];
};

export default class RegisterClick extends VisRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';
  protected contextMenuModels: OwlSimpleModel<ContextMenuModelType>[];

  constructor (payload: ConstructorParam) {
    super();
    this.contextMenuModels = payload.contextMenuModels
  }

  protected async handle (params: any) {
    for (let contextMenuModel of this.contextMenuModels) {
      await contextMenuModel.setData({ mode: false, x: '0', y: '0' });
    }
  }
}
