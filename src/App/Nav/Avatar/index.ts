import OwlContainerManipulator from '@/webowl/OwlManipulator/OwlContainerManipulator';
import RenderAvatar from './Render';
import StyleAvatar from './Style';
import RegisterAvatarClick from './RegisterAvatarClick';

export type ConstructorParam = {
  nickname: string;
};

export default class Avatar extends OwlContainerManipulator {
  constructor (payload: ConstructorParam) {
    super({
      manipulators: [
        new RenderAvatar({ nickname: payload.nickname }),
        new StyleAvatar(),
        new RegisterAvatarClick()
      ]
    });
  }
}
