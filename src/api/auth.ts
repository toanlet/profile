import { ILogin } from 'src/config/interface';
import { instance } from './index';
import { PATH } from 'src/config/contanst';

export const login = async (payload: ILogin) => {
  return await instance.post(PATH.LOGIN, payload);
};
