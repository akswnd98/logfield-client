import OwlRenderContainer, { ConstructorParam as ParentConstructorParam } from '..';
import OwlDrawRoot from './OwlDrawRoot';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class OwlRootContainer extends OwlRenderContainer {
  constructor (payload: ConstructorParam) {
    super({
      layout: payload.layout,
      children: payload.children,
      manipulators: [
        new OwlDrawRoot(),
        ...payload.manipulators
      ],
    });
  }
}
