import { EditorView } from 'codemirror';

export default abstract class CodemirrorManipulator {
  abstract manipulate (editor: EditorView): Promise<void>;
}
