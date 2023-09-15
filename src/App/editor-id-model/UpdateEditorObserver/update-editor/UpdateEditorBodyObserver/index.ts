import { ResponseParam } from '@/utils/api/post/find';
import OwlObserver from '@/webowl/OwlObserver';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export type ConstructorParam = {
  editorBodyModel: OwlSimpleModel<string>;
};

export default class UpdateEditorBodyObserver extends OwlObserver<ResponseParam> {
  protected editorBodyModel: OwlSimpleModel<string>;

  constructor (payload: ConstructorParam) {
    super();
    this.editorBodyModel = payload.editorBodyModel;
  }

  async observe (data: ResponseParam) {
    await this.editorBodyModel.setData(data.body);
  }
}
