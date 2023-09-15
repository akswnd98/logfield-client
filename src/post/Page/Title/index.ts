import OwlRenderIdTree from '@/webowl/OwlManipulator/OwlRenderIdTree';
import RenderTitle from './Render';
import StyleTitle from './Style';

export type ConstructorParam = {
  title: string;
};

export default class Title extends OwlRenderIdTree {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderTitle({ title: payload.title }),
        new StyleTitle()
      ],
      idTreeNodes: []
    });
  }
}
