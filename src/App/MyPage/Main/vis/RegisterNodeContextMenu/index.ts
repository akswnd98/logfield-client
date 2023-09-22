import ContextMenuModelType from '@/Popup/ContextMenu/ContextMenuModelType';
import VisRegisterHandler from '@/VisManipulator/VisRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';
import { Network } from 'vis-network';

export type ConstructorParam = {
  network: Network;
  contextMenuModels: OwlSimpleModel<ContextMenuModelType>[];
  nodeContextMenuModel: OwlSimpleModel<ContextMenuModelType>;
  contextedNodeModel: OwlSimpleModel<number>;
};

export default class RegisterNodeContextMenu extends VisRegisterHandler<'oncontext'> {
  protected eventName: 'oncontext' = 'oncontext';
  protected network: Network;
  protected contextMenuModels: OwlSimpleModel<ContextMenuModelType>[];
  protected nodeContextMenuModel: OwlSimpleModel<ContextMenuModelType>;
  protected contextedNodeModel: OwlSimpleModel<number>;

  constructor (payload: ConstructorParam) {
    super();
    this.network = payload.network;
    this.contextMenuModels = payload.contextMenuModels;
    this.nodeContextMenuModel = payload.nodeContextMenuModel;
    this.contextedNodeModel = payload.contextedNodeModel;
  }

  protected async handle (params: any) {
    params.event.preventDefault();
    params.event.stopPropagation();
    const id = this.network.getNodeAt(params.pointer.DOM);
    if (id === undefined) {
      return;
    }
    await Promise.all(this.contextMenuModels.map((model) => { model.setData({ mode: false, x: '0', y: '0' }) }));
    await this.nodeContextMenuModel.setData({ mode: true, x: `${params.pointer.DOM.x}px`, y: `${params.pointer.DOM.y}px` });
    await this.contextedNodeModel.setData(Number(id));
  }
}
