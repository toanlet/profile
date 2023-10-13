import { instance } from '.';

export const getUser = async () => {
  return await instance.get('http://localhost:3000/users');
};
