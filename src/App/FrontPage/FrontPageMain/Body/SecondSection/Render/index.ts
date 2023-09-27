import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { html, render } from 'lit-html';
import graphExample from '@svgs/graph-example.svg'

export default class RenderSecondSection extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'>
          <div id='left'>
            <div id='first'>
              배운 내용을
              <br>
              학습 <div id='impact'>순서대로</div>
              <br>
              정리해 보세요
            </div>
            <div id='second'>
              트리구조가 아닌 그래프 구조로
              <br>
              정리할 수 있습니다.
            </div>
          </div>
          <div id='right'>
            <img src=${graphExample} />
          </div>
        </div>
      `, component.shadowRoot
    );
  }
}
