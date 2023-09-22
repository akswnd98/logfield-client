import OwlComponent from '@/webowl/OwlComponent';
import OwlManipulator from '@/webowl/OwlManipulator';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { EditorState } from '@codemirror/state';
import { placeholder } from '@codemirror/view';
import { tags } from '@lezer/highlight';
import { EditorView } from 'codemirror';
import { html, render } from 'lit-html';

export default class RenderEditBox extends OwlManipulator {
  async manipulate (component: OwlComponent) {
    render(
      html`
        <div id='root'></div>
      `, component.shadowRoot
    );
  }
}
