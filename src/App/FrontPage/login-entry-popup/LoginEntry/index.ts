import RenderLoginEntry from './Render';
import StyleLoginEntry from './Style';
import OwlRenderIdTree, { IdTreeNodeType } from '@/webowl/OwlManipulator/OwlRenderIdTree';

export type ConstructorParam = {
  idTreeNodes: IdTreeNodeType[];
};

export default class LoginEntry extends OwlRenderIdTree {
  constructor (payload: ConstructorParam) {
    super({
      idTreeNodes: payload.idTreeNodes,
      manipulators: [
        new RenderLoginEntry(),
        new StyleLoginEntry()
      ]
    });
  }
}
