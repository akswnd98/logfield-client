import axiosInstance from "../..";

export type GetMyProfileResponse = {
  id: number;
  email: string;
  nickname: string;
};

export default async function getMyProfile () {
  return (await axiosInstance.get<GetMyProfileResponse>('/api/user/getMyProfile', { params: {} })).data;
}
