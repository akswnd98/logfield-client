import { Network } from 'vis-network';

export default class MyPageNetwork {
  protected static instance?: Network;

  static getInstance () {
    try {
      if (MyPageNetwork.instance === undefined) {
        throw 'no instance';
      }
      return MyPageNetwork.instance;
    } catch (e) {
      console.log(e);
      throw 'MyPageNetwork failed';
    }
  }

  static setInstance (instance: Network) {
    MyPageNetwork.instance = instance;
  }
}
