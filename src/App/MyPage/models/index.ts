import { ResponseParam } from '@/utils/api/post/find';
import OwlNotifier from '@/webowl/OwlNotifier';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';
import GraphModel from '../GraphModel';
import ContextMenuModelType from '@/Popup/ContextMenu/ContextMenuModelType';
import { VisEdgeType, VisNodeType } from '@/utils/vis/types';
import { DataSet } from 'vis-data';

export const editorPopupModel = new OwlSimpleModel<boolean>({ initialData: false, observers: [] });
export const updateEditorNotifier = new OwlNotifier<ResponseParam>({ observers: [] });
export const editorIdModel = new OwlSimpleModel<number>({ initialData: -1, observers: [] });
export const editorBodyModel = new OwlSimpleModel<string>({ initialData: '', observers: [] });
export const editorTitleModel = new OwlSimpleModel<string>({ initialData: '', observers: [] });
export const commandLinePopupModel = new OwlSimpleModel<boolean>({ initialData: false, observers: [] });
export const graphModel = new GraphModel();
export const backgroundContextMenuModel = new OwlSimpleModel<ContextMenuModelType>({
  initialData: {
    mode: false,
    x: '0',
    y: '0'
  },
  observers: []
});
export const nodeContextMenuModel = new OwlSimpleModel<ContextMenuModelType>({
  initialData: {
    mode: false,
    x: '0',
    y: '0'
  },
  observers: []
});
export const edgeContextMenuModel = new OwlSimpleModel<ContextMenuModelType>({
  initialData: {
    mode: false,
    x: '0',
    y: '0'
  },
  observers: []
});
export const contextMenuModels = [
  backgroundContextMenuModel,
  nodeContextMenuModel,
  edgeContextMenuModel
];
export const contextedNodeModel = new OwlSimpleModel<number>({ initialData: -1, observers: [] });
export const contextedEdgeModel = new OwlSimpleModel<number>({ initialData: -1, observers: [] });
export const editEdgeModeModel = new OwlSimpleModel<boolean>({ initialData: false, observers: [] });

export const nodes = new DataSet<VisNodeType>();
export const edges = new DataSet<VisEdgeType>();
