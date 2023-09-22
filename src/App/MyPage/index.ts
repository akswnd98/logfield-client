import RenderMyPage from './Render';
import StyleMyPage from './Style';
import OwlRenderIdTree, { IdTreeNodeType } from '@/webowl/OwlManipulator/OwlRenderIdTree';

export type ConstructorParam = {
  idTreeNodes: IdTreeNodeType[];
};

export default class MyPage extends OwlRenderIdTree {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderMyPage(),
        new StyleMyPage()
      ],
      idTreeNodes: payload.idTreeNodes
    });
  }
}
