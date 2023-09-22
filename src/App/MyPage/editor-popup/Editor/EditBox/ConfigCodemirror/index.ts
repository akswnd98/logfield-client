import CodemirrorManipulator from '@/CodemirrorManipulator';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { EditorState } from '@codemirror/state';
import { placeholder } from '@codemirror/view';
import { tags } from '@lezer/highlight';
import { EditorView } from 'codemirror';

export type ConstructorParam = {
  model: OwlSimpleModel<string>;
};

export default class ConfigCodemirror extends CodemirrorManipulator {
  protected model: OwlSimpleModel<string>;

  constructor (payload: ConstructorParam) {
    super();
    this.model = payload.model;
  }

  async manipulate (editor: EditorView) {
    const editorTheme = EditorView.theme({
      '&.cm-editor.cm-focused': {
        outline: 'none',
        fontFamily: 'NotoSansKR',
      },
      '& .cm-content': {
        width: '100%',
        fontFamily: 'NotoSansKR',
      },
      '& .cm-line': {
        'wordWrap': 'break-word',
        'whiteSpace': 'pre-wrap',
        'wordBreak': 'normal',
      },
    });
    const mdHighlighting = HighlightStyle.define([
      { tag: tags.heading1, fontSize: '40px', fontWeight: 'bold' },
      { tag: tags.heading2, fontSize: '32px', fontWeight: 'bold' },
      { tag: tags.heading3, fontSize: '28px', fontWeight: 'bold' },
      { tag: tags.heading4, fontSize: '24px', fontWeight: 'bold' },
      { tag: tags.heading5, fontSize: '24px', fontWeight: 'bold' },
      { tag: tags.heading6, fontSize: '24px', fontWeight: 'bold' },
      { tag: tags.quote, fontSize: '20px', color: 'gray' , fontWeight: 'bold' },
      { tag: tags.content, fontSize: '18px' },
    ]);
    editor.setState(
      EditorState.create({
        doc: this.model.getData(),
        extensions: [
          editorTheme,
          markdown({ base: markdownLanguage }),
          syntaxHighlighting(mdHighlighting),
          EditorView.updateListener.of(async (e) => {
            if (e.docChanged) {
              this.model.setData(e.state.doc.sliceString(0, e.state.doc.length));
            }
          }),
          placeholder('새로운 글을 작성...')
        ],
      })
    );
  }
}
