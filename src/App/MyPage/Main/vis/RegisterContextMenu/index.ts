import { contextedEdgeModel, contextedNodeModel, edgeContextMenuModel, nodeContextMenuModel } from '@/App/MyPage/models';
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

export default class RegisterContextMenu extends VisRegisterHandler<'oncontext'> {
  protected eventName: 'oncontext' = 'oncontext';
  protected network: Network;
  protected contextMenuModels: OwlSimpleModel<ContextMenuModelType>[];

  constructor (payload: ConstructorParam) {
    super();
    this.network = payload.network;
    this.contextMenuModels = payload.contextMenuModels;
  }

  protected async handle (params: any) {
    params.event.preventDefault();
    params.event.stopPropagation();
    if (params.nodes.length > 0) {
      await Promise.all(this.contextMenuModels.map((model) => { model.setData({ mode: false, x: '0', y: '0' }) }));
      await nodeContextMenuModel.setData({ mode: true, x: `${params.pointer.DOM.x}px`, y: `${params.pointer.DOM.y}px` });
      await contextedNodeModel.setData(Number(params.nodes[0]));
      return;
    }
    if (params.edges.length > 0) {
      await Promise.all(this.contextMenuModels.map((model) => { model.setData({ mode: false, x: '0', y: '0' }) }));
      await edgeContextMenuModel.setData({ mode: true, x: `${params.pointer.DOM.x}px`, y: `${params.pointer.DOM.y}px` });
      await contextedEdgeModel.setData(params.edges[0]);
      return;
    }
  }
}
