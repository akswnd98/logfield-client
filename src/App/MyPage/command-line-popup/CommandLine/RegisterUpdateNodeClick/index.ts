import GraphModel from '@/App/MyPage/GraphModel';
import UpdateNode from '@/App/MyPage/GraphModel/UpdateNode';
import update from '@/utils/api/post/update';
import { VisNodeType } from '@/utils/vis/types';
import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';
import { DataSet } from 'vis-data';

export type ConstructorParam = {
  graphModel: GraphModel;
  editorPopupModel: OwlSimpleModel<boolean>;
  editorIdModel: OwlSimpleModel<number>;
  editorTitleModel: OwlSimpleModel<string>;
  editorBodyModel: OwlSimpleModel<string>;
  commandLinePopupModel: OwlSimpleModel<boolean>;
  nodes: DataSet<VisNodeType>;
};

export default class RegisterUpdateNodeClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';

  protected graphModel: GraphModel;
  protected editorPopupModel: OwlSimpleModel<boolean>;
  protected editorIdModel: OwlSimpleModel<number>;
  protected editorTitleModel: OwlSimpleModel<string>;
  protected editorBodyModel: OwlSimpleModel<string>;
  protected commandLinePopupModel: OwlSimpleModel<boolean>;
  protected nodes: DataSet<VisNodeType>;

  constructor (payload: ConstructorParam) {
    super({ id: 'save-button' });
    this.graphModel = payload.graphModel;
    this.editorPopupModel = payload.editorPopupModel;
    this.editorIdModel = payload.editorIdModel;
    this.editorTitleModel = payload.editorTitleModel;
    this.editorBodyModel = payload.editorBodyModel;
    this.commandLinePopupModel = payload.commandLinePopupModel;
    this.nodes = payload.nodes;
  }

  async handle (event: MouseEvent) {
    try {
      if (!this.editorPopupModel.getData()) {
        return;
      }
      await update(this.editorIdModel.getData(), this.editorTitleModel.getData(), this.editorBodyModel.getData());
      await this.graphModel.operate(
        new UpdateNode({
          id: this.editorIdModel.getData(),
          title: this.editorTitleModel.getData(),
          nodes: this.nodes
        })
      );
      this.commandLinePopupModel.setData(false);
    } catch (e) {
      console.log(e);
      throw 'RegisterUpdateNodeClick failed';
    }
  }
}
