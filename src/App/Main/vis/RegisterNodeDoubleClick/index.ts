import VisRegisterHandler from '@/VisManipulator/VisRegisterHandler';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export type ConstructorParam = {
  editorIdModel: OwlSimpleModel<number>;
  editorPopupModel: OwlSimpleModel<boolean>;
};

export default class RegisterNodeDoubleClick extends VisRegisterHandler<'doubleClick'> {
  protected eventName: 'doubleClick' = 'doubleClick';

  protected editorIdModel: OwlSimpleModel<number>;
  protected editorPopupModel: OwlSimpleModel<boolean>;

  constructor (payload: ConstructorParam) {
    super();
    this.editorIdModel = payload.editorIdModel;
    this.editorPopupModel = payload.editorPopupModel;
  }

  protected async handle (params: any) {
    if (params.nodes.length > 0) {
      this.editorIdModel.setData(params.nodes[0]);
      this.editorPopupModel.setData(true);
    }
  }
}
