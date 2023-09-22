import OwlRenderIdTree, { IdTreeNodeType } from '@/webowl/OwlManipulator/OwlRenderIdTree';
import RenderNav from './Render';
import StyleNav from './Style';

export type ConstructorParam = {
  idTreeNodes: IdTreeNodeType[];
};

export default class Nav extends OwlRenderIdTree {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderNav(),
        new StyleNav()
      ],
      idTreeNodes: payload.idTreeNodes
    });
  }
}
