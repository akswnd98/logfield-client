import { GetMyProfileResponse } from '@/utils/api/user/getMyProfile';
import OwlSimpleModel from '@/webowl/OwlSimpleModel';

export const loginEntryPopupModel = new OwlSimpleModel<boolean>({ initialData: false, observers: [] });
export const emailLoginPopupModel = new OwlSimpleModel<boolean>({ initialData: false, observers: [] });
export const emailLoginEmailModel = new OwlSimpleModel<string>({ initialData: '', observers: [] });
export const userProfileModel = new OwlSimpleModel<GetMyProfileResponse>({ initialData: { id: -1, email: '', nickname: '' }, observers: [] });
