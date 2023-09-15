import OwlSimpleModel from '@/webowl/OwlSimpleModel';
import RegisterWindowHandler from '..';

export type ConstructorParam = {
  commandLinePopupModel: OwlSimpleModel<boolean>;
};

export default class RegisterCommandLineShortKey extends RegisterWindowHandler<'keydown'> {
  protected eventName: 'keydown' = 'keydown';
  protected commandLinePopupModel: OwlSimpleModel<boolean>;

  constructor (payload: ConstructorParam) {
    super();
    this.commandLinePopupModel = payload.commandLinePopupModel;
  }

  protected async handle (e: KeyboardEvent) {
    if (e.ctrlKey && e.code === 'Backquote') {
      this.commandLinePopupModel.setData(!this.commandLinePopupModel.getData());
    }
  }
}
