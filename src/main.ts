import { DataSet } from 'vis-data';
import App from './App';
import Main from './App/Main';
import './index.scss';
import OwlComponent from './webowl/OwlComponent';
import { VisEdgeType, VisNodeType } from './utils/vis/types';
import { Network } from 'vis-network';
import VisContainerManipulator from './VisManipulator/VisContainerManipulator';
import RegisterNodeDoubleClick from './App/Main/vis/RegisterNodeDoubleClick';
import RegisterNodeContextMenu from './App/Main/vis/RegisterNodeContextMenu';
import FullScreenPopup from './Popup/FullScreenPopup';
import Editor from './App/editor-popup/Editor';
import OwlSimpleModel from './webowl/OwlSimpleModel';
import RegisterFullScreenPopupObserver from './Popup/FullScreenPopup/RegisterFullScreenPopupObserver';
import UpdateEditorObserver from './App/editor-id-model/UpdateEditorObserver';
import OwlNotifier from './webowl/OwlNotifier';
import { ResponseParam } from './utils/api/post/find';
import UpdateEditorBodyObserver from './App/editor-id-model/UpdateEditorObserver/update-editor/UpdateEditorBodyObserver';
import UpdateEditorTitleObserver from './App/editor-id-model/UpdateEditorObserver/update-editor/UpdateEditorTitleObserver';
import { EditorView } from 'codemirror';
import ConfigCodemirror from './App/editor-popup/Editor/EditBox/ConfigCodemirror';
import UpdateCodemirrorObserver from './App/editor-popup/Editor/EditBox/UpdateCodemirrorObserver';
import Viewer from './App/editor-popup/Editor/Viewer';
import UpdateViewerObserver from './App/editor-popup/Editor/Viewer/UpdateViewerObserver';
import RegisterCommandLineShortKey from './RegisterWindowHandler/RegisterCommandLineShortKey';
import RegisterUpdateClick from './App/command-line-popup/CommandLine/RegisterUpdateNodeClick';
import RegisterCreateClick from './App/command-line-popup/CommandLine/RegisterCreateNodeClick';
import GraphModel from './App/GraphModel';
import RegisterTitleInput from './App/command-line-popup/CommandLine/RegisterTitleInput';
import UpdateTitleObserver from './App/command-line-popup/CommandLine/UpdateTitleObserver';
import ContextMenuModelType from './Popup/ContextMenu/ContextMenuModelType';
import ContextMenu from './Popup/ContextMenu';
import CommandLine from './App/command-line-popup/CommandLine';
import VisNetwork from './App/Main/VisNetwork';
import EditBox from './App/editor-popup/Editor/EditBox';
import RegisterClick from './App/Main/vis/RegisterClick';
import InitNodes from './App/GraphModel/InitNodes';
import InitEdges from './App/GraphModel/InitEdges';
import ContextMenuBody from './Popup/ContextMenu/ContextMenuBody';
import ContextMenuItem from './Popup/ContextMenu/ContextMenuBody/ContextMenuItem';
import RegisterDeleteNodeClick from './App/Main/context-menus/RegisterDeleteNodeClick';
import RegisterToggleEditModeClick from './App/Main/context-menus/RegisterToggleEditEdgeModeClick';
import UpdateEditEdgeModeObserver from './App/Main/context-menus/BackgroundContextMenuBody/ToggleEditEdgeModeItem/UpdateEditEdgeModeObserver';
import RegisterBackgroundContextMenu from './App/Main/vis/RegisterBackgroundContextMenu';
import createEdge from './utils/api/edge/create';
import RegisterEdgeContextMenu from './App/Main/vis/RegisterEdgeContextMenu';
import RegisterDeleteEdgeClick from './App/Main/context-menus/RegisterDeleteEdgeClick';

const root = document.getElementById('root')!;

(async () => {
  const appComponent = new OwlComponent();
  const mainComponent = new OwlComponent();
  const visNetworkComponent = new OwlComponent();
  const editorPopupComponent = new OwlComponent();
  const editorComponent = new OwlComponent();
  const editBoxComponent = new OwlComponent();
  const viewerComponent = new OwlComponent();
  const commandLinePopupComponent = new OwlComponent();
  const commandLineComponent = new OwlComponent();
  const backgroundContextMenuComponent = new OwlComponent();
  const backgroundContextMenuBodyComponent = new OwlComponent();
  const nodeContextMenuComponent = new OwlComponent();
  const nodeContextMenuBodyComponent = new OwlComponent();
  const edgeContextMenuComponent = new OwlComponent();
  const edgeContextMenuBodyComponent = new OwlComponent();

  const editorPopupModel = new OwlSimpleModel<boolean>({ initialData: false, observers: [] });
  const updateEditorNotifier = new OwlNotifier<ResponseParam>({ observers: [] });
  const editorIdModel = new OwlSimpleModel<number>({ initialData: -1, observers: [] });
  const editorBodyModel = new OwlSimpleModel<string>({ initialData: '', observers: [] });
  const editorTitleModel = new OwlSimpleModel<string>({ initialData: '', observers: [] });
  const commandLinePopupModel = new OwlSimpleModel<boolean>({ initialData: false, observers: [] });
  const graphModel = new GraphModel();
  const backgroundContextMenuModel = new OwlSimpleModel<ContextMenuModelType>({
    initialData: {
      mode: false,
      x: '0',
      y: '0'
    },
    observers: []
  });
  const nodeContextMenuModel = new OwlSimpleModel<ContextMenuModelType>({
    initialData: {
      mode: false,
      x: '0',
      y: '0'
    },
    observers: []
  });
  const edgeContextMenuModel = new OwlSimpleModel<ContextMenuModelType>({
    initialData: {
      mode: false,
      x: '0',
      y: '0'
    },
    observers: []
  });
  const contextMenuModels = [
    backgroundContextMenuModel,
    nodeContextMenuModel,
    edgeContextMenuModel
  ];
  const contextedNodeModel = new OwlSimpleModel<number>({ initialData: -1, observers: [] });
  const contextedEdgeModel = new OwlSimpleModel<number>({ initialData: -1, observers: [] });
  const editEdgeModeModel = new OwlSimpleModel<boolean>({ initialData: false, observers: [] });

  const nodes = new DataSet<VisNodeType>();
  const edges = new DataSet<VisEdgeType>();

  await new App({
    idTreeNodes: [{
      id: 'main',
      component: mainComponent,
      manipulator: new Main({
        idTreeNodes: [{
          id: 'vis-network',
          component: visNetworkComponent,
          manipulator: new VisNetwork()
        }, {
          id: 'root',
          component: nodeContextMenuComponent,
          manipulator: new ContextMenu({
            model: nodeContextMenuModel,
            body: new ContextMenuBody({
              manipulateMenuItems: [
                new ContextMenuItem({
                  label: 'delete',
                  additionalManipulators: [
                    new RegisterDeleteNodeClick({
                      contextedNodeModel,
                      graphModel,
                      nodes
                    })
                  ]
                })
              ]
            }),
            bodyComponent: nodeContextMenuBodyComponent
          })
        }, {
          id: 'root',
          component: edgeContextMenuComponent,
          manipulator: new ContextMenu({
            model: edgeContextMenuModel,
            body: new ContextMenuBody({
              manipulateMenuItems: [
                new ContextMenuItem({
                  label: 'delete',
                  additionalManipulators: [
                    new RegisterDeleteEdgeClick({
                      contextedEdgeModel,
                      graphModel,
                      edges
                    })
                  ]
                })
              ]
            }),
            bodyComponent: edgeContextMenuBodyComponent
          })
        }, {
          id: 'root',
          component: backgroundContextMenuComponent,
          manipulator: new ContextMenu({
            model: backgroundContextMenuModel,
            body: new ContextMenuBody({
              manipulateMenuItems: [
                new ContextMenuItem({
                  label: 'toggle edit edge mode',
                  additionalManipulators: [
                    new RegisterToggleEditModeClick({ editEdgeModeModel })
                  ]
                })
              ]
            }),
            bodyComponent: backgroundContextMenuBodyComponent
          })
        }]
      })
    }, {
      id: 'command-line-popup',
      component: commandLinePopupComponent,
      manipulator: new FullScreenPopup({
        bodyComponent: commandLineComponent,
        body: new CommandLine({
          additionalManipulators: [
            new RegisterCreateClick({
              graphModel,
              editorPopupModel,
              editorTitleModel,
              commandLinePopupModel,
              nodes
            }),
            new RegisterUpdateClick({
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
  }).manipulate(appComponent);
  root.appendChild(appComponent);

  const network = new Network(
    visNetworkComponent.shadowRoot.getElementById('root')!, {
      nodes, edges
    }, {
      manipulation: {
        addEdge: async function (edgeData: any, callback: any) {
          await createEdge(edgeData.from, edgeData.to)
          callback(edgeData);
        }
      }
    }
  );
  
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
})();
