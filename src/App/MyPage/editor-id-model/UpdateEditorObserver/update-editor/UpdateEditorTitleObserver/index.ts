import { ResponseParam } from '@/utils/api/post/find';
import OwlObserver from '@/webowl/OwlObserver';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export type ConstructorParam = {
  editorTitleModel: OwlSimpleModel<string>;
};

export default class UpdateEditorTitleObserver extends OwlObserver<ResponseParam> {
  protected editorTitleModel: OwlSimpleModel<string>;

  constructor (payload: ConstructorParam) {
    super();
    this.editorTitleModel = payload.editorTitleModel;
  }

  async observe (data: ResponseParam) {
    await this.editorTitleModel.setData(data.title);
  }
}
