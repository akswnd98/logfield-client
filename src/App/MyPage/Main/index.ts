import RenderMain from './Render';
import StyleMain from './Style';
import OwlRenderIdTree, { IdTreeNodeType } from '@/webowl/OwlManipulator/OwlRenderIdTree';

export type ConstructorParam = {
  idTreeNodes: IdTreeNodeType[];
};

export default class Main extends OwlRenderIdTree {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderMain(),
        new StyleMain()
      ],
      idTreeNodes: payload.idTreeNodes
    });
  }
}
