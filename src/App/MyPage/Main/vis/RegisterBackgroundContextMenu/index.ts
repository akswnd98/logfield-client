import ContextMenuModelType from '@/Popup/ContextMenu/ContextMenuModelType';
import VisRegisterHandler from '@/VisManipulator/VisRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export type ConstructorParam = {
  contextMenuModels: OwlSimpleModel<ContextMenuModelType>[];
  backgroundContextMenuModel: OwlSimpleModel<ContextMenuModelType>;
};

export default class RegisterBackgroundContextMenu extends VisRegisterHandler<'oncontext'> {
  protected eventName: 'oncontext' = 'oncontext';
  protected contextMenuModels: OwlSimpleModel<ContextMenuModelType>[];
  protected backgroundContextMenuModel: OwlSimpleModel<ContextMenuModelType>;

  constructor (payload: ConstructorParam) {
    super();
    this.contextMenuModels = payload.contextMenuModels;
    this.backgroundContextMenuModel = payload.backgroundContextMenuModel;
  }

  protected async handle (params: any) {
    params.event.preventDefault();
    params.event.stopPropagation();
    if (params.nodes.length > 0 || params.edges.length > 0) {
      return;
    }
    await Promise.all(this.contextMenuModels.map((model) => { model.setData({ mode: false, x: '0', y: '0' }) }));
    await this.backgroundContextMenuModel.setData({ mode: true, x: `${params.pointer.DOM.x}px`, y: `${params.pointer.DOM.y}px` });
  }
}
