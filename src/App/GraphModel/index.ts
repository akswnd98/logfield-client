import OwlModel from '@/webowl/OwlModel';

export type DataType = {
  nodes: Map<number, Node>;
  edges: Map<number, Edge>;
};

export type Node = {
  label: string;
};

export type Edge = {
  fromId: number;
  toId: number;
};

export default class GraphModel extends OwlModel<DataType> {
  protected data: DataType;

  constructor () {
    super();
    this.data = {
      nodes: new Map<number, Node>(),
      edges: new Map<number, Edge>()
    };
  }
}
