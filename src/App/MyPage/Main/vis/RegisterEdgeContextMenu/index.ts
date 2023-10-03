import ContextMenuModelType from '@/Popup/ContextMenu/ContextMenuModelType';
import VisRegisterHandler from '@/VisManipulator/VisRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export type ConstructorParam = {
  contextMenuModels: OwlSimpleModel<ContextMenuModelType>[];
  edgeContextMenuModel: OwlSimpleModel<ContextMenuModelType>;
  contextedEdgeModel: OwlSimpleModel<number>;
};

export default class RegisterEdgeContextMenu extends VisRegisterHandler<'oncontext'> {
  protected eventName: 'oncontext' = 'oncontext';
  protected contextMenuModels: OwlSimpleModel<ContextMenuModelType>[];
  protected edgeContextMenuModel: OwlSimpleModel<ContextMenuModelType>;
  protected contextedEdgeModel: OwlSimpleModel<number>;

  constructor (payload: ConstructorParam) {
    super();
    this.contextMenuModels = payload.contextMenuModels;
    this.edgeContextMenuModel = payload.edgeContextMenuModel;
    this.contextedEdgeModel = payload.contextedEdgeModel;
  }

  protected async handle (params: any) {
    params.event.preventDefault();
    params.event.stopPropagation();
    if (params.edges.length <= 0 || params.nodes.length > 0) {
      return;
    }
    await this.contextedEdgeModel.setData(params.edges[0]);
    await Promise.all(this.contextMenuModels.map((model) => { model.setData({ mode: false, x: '0', y: '0' }) }));
    await this.edgeContextMenuModel.setData({ mode: true, x: `${params.pointer.DOM.x}px`, y: `${params.pointer.DOM.y}px` });
  }
}
