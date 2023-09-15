import OwlRenderIdTree, { IdTreeNodeType } from '@/webowl/OwlManipulator/OwlRenderIdTree';
import RenderPage from './Render';
import StylePage from './Style';

export type ConstructorParam = {
  idTreeNodes: IdTreeNodeType[];
};

export default class Page extends OwlRenderIdTree {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderPage(),
        new StylePage()
      ],
      idTreeNodes: payload.idTreeNodes
    })
  }
}
