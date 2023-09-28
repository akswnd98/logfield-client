import ContextMenuModelType from '@/Popup/ContextMenu/ContextMenuModelType';
import { GetMyProfileResponse } from '@/utils/api/user/getMyProfile';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export const loginEntryPopupModel = new OwlSimpleModel<boolean>({ initialData: false, observers: [] });
export const emailLoginPopupModel = new OwlSimpleModel<boolean>({ initialData: false, observers: [] });
export const emailLoginEmailModel = new OwlSimpleModel<string>({ initialData: '', observers: [] });
export const userProfileModel = new OwlSimpleModel<GetMyProfileResponse>({ initialData: { id: -1, email: '', nickname: '' }, observers: [] });
export const avatarContextModel = new OwlSimpleModel<ContextMenuModelType>({ initialData: { mode: false, x: '0', y: '0' }, observers: [] });
