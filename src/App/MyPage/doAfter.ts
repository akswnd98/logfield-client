import {
  commandLineComponent,
  editBoxComponent,
  viewerComponent,
  visNetworkComponent
} from './components';
import { backgroundContextMenuModel, edgeContextMenuModel, nodeContextMenuModel, updateEditorNotifier } from './models';
import {
  nodes,
  graphModel,
  contextedNodeModel,
  contextedEdgeModel,
  edges,
  editorPopupModel,
  editorTitleModel,
  commandLinePopupModel,
  editEdgeModeModel,
  editorIdModel,
  editorBodyModel,
  contextMenuModels
} from './models';
import { Network } from 'vis-network';
import createEdge from '@/utils/api/edge/create';
import InitNodes from './GraphModel/InitNodes';
import InitEdges from './GraphModel/InitEdges';
import VisContainerManipulator from '@/VisManipulator/VisContainerManipulator';
import RegisterNodeDoubleClick from './Main/vis/RegisterNodeDoubleClick';
import RegisterNodeContextMenu from './Main/vis/RegisterNodeContextMenu';
import RegisterEdgeContextMenu from './Main/vis/RegisterEdgeContextMenu';
import RegisterBackgroundContextMenu from './Main/vis/RegisterBackgroundContextMenu';
import RegisterClick from './Main/vis/RegisterClick';
import { EditorView } from 'codemirror';
import ConfigCodemirror from './editor-popup/Editor/EditBox/ConfigCodemirror';
import UpdateCodemirrorObserver from './editor-popup/Editor/EditBox/UpdateCodemirrorObserver';
import UpdateViewerObserver from './editor-popup/Editor/Viewer/UpdateViewerObserver';
import UpdateEditorBodyObserver from './editor-id-model/UpdateEditorObserver/update-editor/UpdateEditorBodyObserver';
import UpdateEditorTitleObserver from './editor-id-model/UpdateEditorObserver/update-editor/UpdateEditorTitleObserver';
import UpdateEditorObserver from './editor-id-model/UpdateEditorObserver';
import UpdateTitleObserver from './command-line-popup/CommandLine/UpdateTitleObserver';
import RegisterCommandLineShortKey from '@/RegisterWindowHandler/RegisterCommandLineShortKey';
import UpdateEditEdgeModeObserver from './Main/context-menus/BackgroundContextMenuBody/ToggleEditEdgeModeItem/UpdateEditEdgeModeObserver';
import MyPageNetwork from './models/MyPageNetwork';

export const doAfterMyPageConstruct = async () => {
  const network = new Network(
    visNetworkComponent.shadowRoot.getElementById('root')!, {
      nodes, edges
    }, {
      manipulation: {
        addEdge: async function (edgeData: any, callback: any) {
          const res = await createEdge(edgeData.from, edgeData.to);
          edges.add({ id: res.id, from: edgeData.from, to: edgeData.to });
          editEdgeModeModel.setData(false);
          callback(null);
        }
      },
      layout: {
        hierarchical: {
          enabled: true,
          sortMethod: 'directed'
        }
      },
      nodes: {
        shape: 'text'
      },
      edges: {
        arrows: {
          to: true
        },
        color: {
          color: 'gray'
        }
      }
    }
  );
  MyPageNetwork.setInstance(network);

  await graphModel.operate(new InitNodes({ nodes }));
  await graphModel.operate(new InitEdges({ edges }));

  await new VisContainerManipulator({
    manipulators: [
      new RegisterNodeDoubleClick({ editorIdModel, editorPopupModel }),
      new RegisterNodeContextMenu({ network, contextMenuModels, nodeContextMenuModel, contextedNodeModel }),
      new RegisterEdgeContextMenu({ contextMenuModels, edgeContextMenuModel, contextedEdgeModel }),
      new RegisterBackgroundContextMenu({ contextMenuModels, backgroundContextMenuModel }),
      new RegisterClick({ contextMenuModels })
    ]
  }).manipulate(network);

  const editor = new EditorView({
    parent: editBoxComponent.shadowRoot.getElementById('root')!
  });

  await new ConfigCodemirror({
    model: editorBodyModel
  }).manipulate(editor);

  editorBodyModel.registerObserver(new UpdateCodemirrorObserver({ editor }));
  editorBodyModel.registerObserver(new UpdateViewerObserver({ viewerComponent }));

  [
    new UpdateEditorBodyObserver({ editorBodyModel }),
    new UpdateEditorTitleObserver({ editorTitleModel })
  ].forEach((v) => { updateEditorNotifier.registerObserver(v) });
  editorIdModel.registerObserver(
    new UpdateEditorObserver({ notifier: updateEditorNotifier })
  );

  editorTitleModel.registerObserver(
    new UpdateTitleObserver({
      component: commandLineComponent
    })
  );

  new RegisterCommandLineShortKey({ commandLinePopupModel }).register();

  editEdgeModeModel.registerObserver(new UpdateEditEdgeModeObserver({ network }));
};
