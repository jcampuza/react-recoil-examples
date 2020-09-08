import { MutableSnapshot } from 'recoil';
import { Theme, themeAtom } from './theme';
import { currentSlideIndex } from '../components/App';

export const stateInitializer = (snapshot: MutableSnapshot) => {
  snapshot.set(themeAtom, (localStorage.getItem(themeAtom.key) ?? 'light') as Theme);
  snapshot.set(currentSlideIndex, Number(localStorage.getItem(currentSlideIndex.key)) ?? 0);
};
