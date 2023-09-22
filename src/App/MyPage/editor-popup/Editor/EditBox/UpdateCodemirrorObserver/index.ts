import OwlObserver from '@/webowl/OwlObserver';
import { EditorView } from 'codemirror';

export type ConstructorParam = {
  editor: EditorView;
};

export default class UpdateCodemirrorObserver extends OwlObserver<string> {
  protected editor: EditorView;

  constructor (payload: ConstructorParam) {
    super();
    this.editor = payload.editor;
  }

  async observe (data: string) {
    if (data === this.editor.state.doc.toString()) {
      return;
    }
    this.editor.update([this.editor.state.update({ changes: { from: 0, to: this.editor.state.doc.length, insert: data } })]);
  }
}
