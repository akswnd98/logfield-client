import { avatarContextModel } from '@/App/models';
import ContextMenu from '@/Popup/ContextMenu';
import OwlComponent from '@/webowl/OwlComponent';
import Body from './Body';

export default class AvatarContextMenu extends ContextMenu {
  constructor () {
    super({
      model: avatarContextModel,
      body: new Body(),
      bodyComponent: new OwlComponent()
    });
  }
}
