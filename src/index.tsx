import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { App } from './components/App';
import { PersistenceObserver } from './components/PersistenceObserver';
import { stateInitializer } from './state/stateInitializer';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot initializeState={stateInitializer}>
      <Router>
        <App />
        <PersistenceObserver />
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
