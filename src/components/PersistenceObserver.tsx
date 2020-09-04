import { useRecoilTransactionObserver_UNSTABLE } from 'recoil';
import { themeAtom } from '../util/theme';

export const PersistenceObserver: React.FC = () => {
  useRecoilTransactionObserver_UNSTABLE(async ({ snapshot }) => {
    const theme = await snapshot.getPromise(themeAtom);

    localStorage.setItem(themeAtom.key, theme);
  });

  return null;
};
