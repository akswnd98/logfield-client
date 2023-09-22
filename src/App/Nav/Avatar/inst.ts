import { userProfileModel } from '@/App/models';
import Avatar from '.';

export default class AvatarInst extends Avatar {
  constructor () {
    super({ nickname: userProfileModel.getData().nickname });
  }
}
