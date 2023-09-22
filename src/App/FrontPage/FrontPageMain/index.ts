import OwlRenderIdTree, { IdTreeNodeType } from '@/webowl/OwlManipulator/OwlRenderIdTree';
import RenderMain from './Render';
import StyleMain from './Style';

export type ConstructorParam = {
  idTreeNodes: IdTreeNodeType[];
};

export default class FrontPageMain extends OwlRenderIdTree {
  constructor (payload: ConstructorParam) {
    super({
      idTreeNodes: payload.idTreeNodes,
      manipulators: [
        new RenderMain(),
        new StyleMain()
      ]
    });
  }
}
