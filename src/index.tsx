import React from 'react';
import ReactDOM from 'react-dom';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { App } from './components/App';
import { PersistenceObserver } from './components/PersistenceObserver';
import { Theme, themeAtom } from './util/theme';

const stateInitializer = (snapshot: MutableSnapshot) => {
  snapshot.set(themeAtom, (localStorage.getItem(themeAtom.key) ?? 'light') as Theme);
};

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot initializeState={stateInitializer}>
      <PersistenceObserver />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
