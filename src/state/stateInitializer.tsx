import { MutableSnapshot } from 'recoil';
import { Theme, themeAtom } from './theme';

export const stateInitializer = (snapshot: MutableSnapshot) => {
  snapshot.set(themeAtom, (localStorage.getItem(themeAtom.key) ?? 'light') as Theme);
};
