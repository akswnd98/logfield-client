import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderEditor from './Render';
import StyleEditor from './Style';
import OwlRenderIdTree, { IdTreeNodeType } from '@/webowl/OwlManipulator/OwlRenderIdTree';

export type ConstructorParam = {
  idTreeNodes: IdTreeNodeType[];
};

export default class Editor extends OwlRenderIdTree {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderEditor(),
        new StyleEditor()
      ],
      ...payload
    });
  }
}
