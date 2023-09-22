import FullScreenPopup from '@/Popup/FullScreenPopup';
import MyPage from '.';
import MainInst from './Main/inst';
import { commandLineComponent, commandLinePopupComponent, editBoxComponent, editorComponent, editorPopupComponent, mainComponent, viewerComponent } from './components';
import CommandLine from './command-line-popup/CommandLine';
import RegisterCreateNodeClick from './command-line-popup/CommandLine/RegisterCreateNodeClick';
import {
  graphModel,
  editorPopupModel,
  editorTitleModel,
  commandLinePopupModel,
  nodes,
  editorIdModel,
  editorBodyModel
} from './models';
import RegisterUpdateNodeClick from './command-line-popup/CommandLine/RegisterUpdateNodeClick';
import RegisterTitleInput from './command-line-popup/CommandLine/RegisterTitleInput';
import RegisterFullScreenPopupObserver from '@/Popup/FullScreenPopup/RegisterFullScreenPopupObserver';
import Editor from './editor-popup/Editor';
import EditBox from './editor-popup/Editor/EditBox';
import Viewer from './editor-popup/Editor/Viewer';

export default class MyPageInst extends MyPage {
  constructor () {
    super({
      idTreeNodes: [{
        id: 'main',
        component: mainComponent,
        manipulator: new MainInst()
      }, {
        id: 'command-line-popup',
        component: commandLinePopupComponent,
        manipulator: new FullScreenPopup({
          bodyComponent: commandLineComponent,
          body: new CommandLine({
            additionalManipulators: [
              new RegisterCreateNodeClick({
                graphModel,
                editorPopupModel,
                editorTitleModel,
                commandLinePopupModel,
                nodes
              }),
              new RegisterUpdateNodeClick({
                graphModel,
                editorIdModel,
                editorPopupModel,
                editorTitleModel,
                editorBodyModel,
                commandLinePopupModel,
                nodes
              }),
              new RegisterTitleInput({
                component: commandLineComponent,
                editorTitleModel
              })
            ]
          }),
          additionalManipulators: [
            new RegisterFullScreenPopupObserver({
              model: commandLinePopupModel
            })
          ]
        })
      }, {
        id: 'editor-popup',
        component: editorPopupComponent,
        manipulator: new FullScreenPopup({
          bodyComponent: editorComponent,
          body: new Editor({
            idTreeNodes: [{
              id: 'edit-box',
              component: editBoxComponent,
              manipulator: new EditBox()
            }, {
              id: 'viewer',
              component: viewerComponent,
              manipulator: new Viewer()
            }]
          }),
          additionalManipulators: [
            new RegisterFullScreenPopupObserver({
              model: editorPopupModel
            })
          ]
        })
      }]
    });
  }
}
