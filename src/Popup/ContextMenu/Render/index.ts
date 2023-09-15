import Popup, { ConstructorParam as ParentConstructorParam } from '@/Popup';

export type ConstructorParam = {
} & ParentConstructorParam;

export default class RenderContextMenu extends Popup {
  constructor (payload: ConstructorParam) {
    super({ ...payload });
  }
}
