import OwlContainerManipulator from '../OwlContainerManipulator';
import OwlContainerAttachToId, { PairType } from '../OwlAttachToId/OwlContainerAttachToId';
import OwlManipulator from '..';
import OwlComponent from '@/webowl/OwlComponent';

export type IdTreeNodeType = {
  id: string;
  component: OwlComponent;
  manipulator: OwlManipulator;
};

export type ConstructorParam = {
  manipulators: OwlManipulator[];
  idTreeNodes: IdTreeNodeType[];
};

export default class OwlRenderIdTree extends OwlContainerManipulator {
  protected idTreeNodes: IdTreeNodeType[];

  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        ...payload.manipulators,
        new OwlContainerAttachToId({
          pairs: payload.idTreeNodes.map((v) => ({ id: v.id, component: v.component }))
        }),
      ]
    });
    this.idTreeNodes = payload.idTreeNodes;
  }

  async manipulate (component: OwlComponent) {
    await super.manipulate(component);
    for (let idTreeNode of this.idTreeNodes) {
      await idTreeNode.manipulator.manipulate(idTreeNode.component);
    }
  }
}
