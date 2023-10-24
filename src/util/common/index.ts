import moment from 'moment';
import { FORMAT_DATE_TIME } from '../constant';
export const utcToLocal = (value: string, format = FORMAT_DATE_TIME) => {
  return moment(value).local().format(format);
};

export const localToUTC = (value: string) => {
  return moment(value).utc().format();
};

export function getRunningDevice() {
  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
    ? 'MOBILE'
    : 'DESKTOP';

  return {
    device,
  };
}

export const setStorage = (key: string, val: string) => {
  window.localStorage.setItem(key, val);
};

export const getStorage = (key: string) =>
  window.localStorage.getItem(key) || '';

export const removeStorage = (key: string) => {
  window.localStorage.removeItem(key);
};
