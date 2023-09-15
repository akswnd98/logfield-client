import { EditorView } from 'codemirror';
import CodemirrorManipulator from '..';

export type ConstructorParam = {
  manipulators: CodemirrorManipulator[];
};

export default class ContainerCodemirrorManipulator extends CodemirrorManipulator {
  protected manipulators: CodemirrorManipulator[];

  constructor (payload: ConstructorParam) {
    super();
    this.manipulators = payload.manipulators;
  }

  async manipulate (editor: EditorView) {
    for (let manipulator of this.manipulators) {
      await manipulator.manipulate(editor);
    }
  }
}
