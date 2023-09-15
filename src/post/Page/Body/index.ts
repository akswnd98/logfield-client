import OwlRenderIdTree from '@/webowl/OwlManipulator/OwlRenderIdTree';
import RenderBody from './Render';
import StyleBody from './Style';
import StyleKatex from './StyleKatex';

export type ConstructorParam = {
  body: string;
};

export default class Body extends OwlRenderIdTree {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderBody({ body: payload.body }),
        new StyleBody(),
        new StyleKatex()
      ],
      idTreeNodes: []
    });
  }
}
