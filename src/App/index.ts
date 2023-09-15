import RenderApp from './Render';
import StyleApp from './Style';
import OwlRenderIdTree, { IdTreeNodeType } from '@/webowl/OwlManipulator/OwlRenderIdTree';

export type ConstructorParam = {
  idTreeNodes: IdTreeNodeType[];
};

export default class App extends OwlRenderIdTree {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderApp(),
        new StyleApp()
      ],
      idTreeNodes: payload.idTreeNodes
    });
  }
}
