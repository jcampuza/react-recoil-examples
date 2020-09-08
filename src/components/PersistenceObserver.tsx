import { useRecoilTransactionObserver_UNSTABLE } from 'recoil';
import { themeAtom } from '../state/theme';
import { currentSlideIndex } from '../components/App';

export const PersistenceObserver: React.FC = () => {
  useRecoilTransactionObserver_UNSTABLE(async ({ snapshot }) => {
    const theme = await snapshot.getPromise(themeAtom);
    const currentSlide = await snapshot.getPromise(currentSlideIndex);

    localStorage.setItem(themeAtom.key, theme);
    localStorage.setItem(currentSlideIndex.key, `${currentSlide}`);
  });

  return null;
};
