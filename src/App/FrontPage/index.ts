import OwlRenderIdTree, { IdTreeNodeType } from '@/webowl/OwlManipulator/OwlRenderIdTree';
import StylePage from './Style';
import RenderPage from './Render';

export type ConstructorParam = {
  idTreeNodes: IdTreeNodeType[];
};

export default class FrontPage extends OwlRenderIdTree {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderPage(),
        new StylePage()
      ],
      idTreeNodes: payload.idTreeNodes
    });
  }
}
