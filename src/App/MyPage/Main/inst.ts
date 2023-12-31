import ContextMenu from '@/Popup/ContextMenu';
import Main from '.';
import { backgroundContextMenuBodyComponent, backgroundContextMenuComponent, edgeContextMenuBodyComponent, edgeContextMenuComponent, nodeContextMenuBodyComponent, nodeContextMenuComponent, visNetworkComponent } from '../components';
import VisNetwork from './VisNetwork';
import { backgroundContextMenuModel, nodeContextMenuModel } from '../models';
import ContextMenuBody from '@/Popup/ContextMenu/ContextMenuBody';
import ContextMenuItem from '@/Popup/ContextMenu/ContextMenuBody/ContextMenuItem';
import RegisterDeleteNodeClick from './context-menus/RegisterDeleteNodeClick';
import {
  contextedNodeModel,
  graphModel,
  nodes,
  edgeContextMenuModel,
  contextedEdgeModel,
  edges,
  editEdgeModeModel
} from '@/App/MyPage/models';
import RegisterDeleteEdgeClick from './context-menus/RegisterDeleteEdgeClick';
import RegisterToggleEditEdgeModeClick from './context-menus/RegisterToggleEditEdgeModeClick';
import OwlComponent from '@/webowl/OwlComponent';
import RegisterGotoPageClick from './context-menus/RegisterGotoPageClick';

export default class MainInst extends Main {
  constructor () {
    super({
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
            children: [{
              component: new OwlComponent(),
              manipulator: new ContextMenuItem({
                label: '페이지로 가기',
                additionalManipulators: [
                  new RegisterGotoPageClick()
                ]
              })
            }, {
              component: new OwlComponent(),
              manipulator: new ContextMenuItem({
                label: '삭제',
                additionalManipulators: [
                  new RegisterDeleteNodeClick({
                    contextedNodeModel,
                    graphModel,
                    nodes
                  })
                ]
              })
            }]
          }),
          bodyComponent: nodeContextMenuBodyComponent
        })
      }, {
        id: 'root',
        component: edgeContextMenuComponent,
        manipulator: new ContextMenu({
          model: edgeContextMenuModel,
          body: new ContextMenuBody({
            children: [{
              component: new OwlComponent(),
              manipulator: new ContextMenuItem({
                label: '삭제',
                additionalManipulators: [
                  new RegisterDeleteEdgeClick({
                    contextedEdgeModel,
                    graphModel,
                    edges
                  })
                ]
              })
            }]
          }),
          bodyComponent: edgeContextMenuBodyComponent
        })
      }, {
        id: 'root',
        component: backgroundContextMenuComponent,
        manipulator: new ContextMenu({
          model: backgroundContextMenuModel,
          body: new ContextMenuBody({
            children: [{
              component: new OwlComponent(),
              manipulator: new ContextMenuItem({
                label: '엣지 모드',
                additionalManipulators: [
                  new RegisterToggleEditEdgeModeClick({ editEdgeModeModel })
                ]
              })
            }]
          }),
          bodyComponent: backgroundContextMenuBodyComponent
        })
      }]
    });
  }
}
