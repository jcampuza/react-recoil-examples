import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { RecoilRoot } from 'recoil';
import { stateInitializer } from './state/stateInitializer';
import { PersistenceObserver } from './components/PersistenceObserver';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot initializeState={stateInitializer}>
      <App />
      <PersistenceObserver />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
