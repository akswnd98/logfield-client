import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';

export type ConstructorParam = {
  nickname: string;
};

export default class RenderAvatar extends OwlManipulator {
  protected nickname: string;

  constructor (payload: ConstructorParam) {
    super();
    this.nickname = payload.nickname;
  }

  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>${this.nickname}</div>
      `, component.shadowRoot
    );
  }
}
