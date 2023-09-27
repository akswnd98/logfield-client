import GraphModel from '@/App/MyPage/GraphModel';
import DeleteEdge from '@/App/MyPage/GraphModel/DeleteEdge';
import { edgeContextMenuModel } from '@/App/MyPage/models';
import { VisEdgeType } from '@/utils/vis/types';
import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';
import { DataSet } from 'vis-data';

export type ConstructorParam = {
  contextedEdgeModel: OwlSimpleModel<number>;
  graphModel: GraphModel;
  edges: DataSet<VisEdgeType>;
};

export default class RegisterDeleteEdgeClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';
  protected contextedEdgeModel: OwlSimpleModel<number>;
  protected graphModel: GraphModel;
  protected edges: DataSet<VisEdgeType>

  constructor (payload: ConstructorParam) {
    super({ id: 'root' });
    this.contextedEdgeModel = payload.contextedEdgeModel;
    this.graphModel = payload.graphModel;
    this.edges = payload.edges;
  }

  async handle (event: MouseEvent) {
    try {
      const edgeId = this.contextedEdgeModel.getData();
      await this.graphModel.operate(new DeleteEdge({ id: edgeId, edges: this.edges }));
      edgeContextMenuModel.setData({ mode: false, x: '0', y: '0'});
    } catch (e) {
      console.log(e);
      throw 'RegisterClick failed';
    }
  }
}
