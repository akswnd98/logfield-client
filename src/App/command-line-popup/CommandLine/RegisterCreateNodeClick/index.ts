import GraphModel from '@/App/GraphModel';
import CreateNode from '@/App/GraphModel/CreateNode';
import { VisNodeType } from '@/utils/vis/types';
import OwlRegisterHandler from '@/webowl/OwlManipulator/OwlRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';
import { DataSet } from 'vis-data';

export type ConstructorParam = {
  graphModel: GraphModel;
  editorPopupModel: OwlSimpleModel<boolean>;
  editorTitleModel: OwlSimpleModel<string>;
  commandLinePopupModel: OwlSimpleModel<boolean>;
  nodes: DataSet<VisNodeType>;
};

export default class RegisterCreateNodeClick extends OwlRegisterHandler<'click'> {
  protected eventName: 'click' = 'click';
  protected graphModel: GraphModel;
  protected editorPopupModel: OwlSimpleModel<boolean>;
  protected editorTitleModel: OwlSimpleModel<string>;
  protected commandLinePopupModel: OwlSimpleModel<boolean>;
  protected nodes: DataSet<VisNodeType>;

  constructor (payload: ConstructorParam) {
    super({ id: 'save-button' });
    this.graphModel = payload.graphModel;
    this.editorPopupModel = payload.editorPopupModel;
    this.editorTitleModel = payload.editorTitleModel;
    this.commandLinePopupModel = payload.commandLinePopupModel;
    this.nodes = payload.nodes;
  }

  async handle (event: MouseEvent) {
    try {
      if (this.editorPopupModel.getData()) {
        return;
      }
      await this.graphModel.operate(
        new CreateNode({
          title: this.editorTitleModel.getData(),
          nodes: this.nodes
        })
      );
      this.commandLinePopupModel.setData(false);
    } catch (e) {
      console.log(e);
      throw 'RegisterCreateNodeClick failed';
    }
  }
}
