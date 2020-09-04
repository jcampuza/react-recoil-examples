import { atom } from 'recoil';

export const geolocationAtom = atom<Position | null>({
  default: null,
  key: 'geolocation',
});
