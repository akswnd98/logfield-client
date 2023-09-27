import GraphModel from '@/App/MyPage/GraphModel';
import DeleteNode from '@/App/MyPage/GraphModel/DeleteNode';
import { nodeContextMenuModel } from '@/App/MyPage/models';
import { VisNodeType } from '@/utils/vis/types';
import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';
import { DataSet } from 'vis-data';

export type ConstructorParam = {
  contextedNodeModel: OwlSimpleModel<number>;
  graphModel: GraphModel;
  nodes: DataSet<VisNodeType>;
};

export default class RegisterDeleteNodeClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';
  protected contextedNodeModel: OwlSimpleModel<number>;
  protected graphModel: GraphModel;
  protected nodes: DataSet<VisNodeType>

  constructor (payload: ConstructorParam) {
    super({ id: 'root' });
    this.contextedNodeModel = payload.contextedNodeModel;
    this.graphModel = payload.graphModel;
    this.nodes = payload.nodes;
  }

  async handle (event: MouseEvent) {
    try {
      const nodeId = this.contextedNodeModel.getData();
      await this.graphModel.operate(new DeleteNode({ id: nodeId, nodes: this.nodes }));
      nodeContextMenuModel.setData({ mode: false, x: '0', y: '0'});
    } catch (e) {
      console.log(e);
      throw 'RegisterClick failed';
    }
  }
}
