import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteChildrenProps,
  Switch,
  useHistory,
} from 'react-router-dom';
import { Demo0 } from '../demo/demo-0';
import { Demo1 } from '../demo/demo-1';
import { Demo2 } from '../demo/demo-2';
import { Demo3 } from '../demo/demo-3';
import { Demo4 } from '../demo/demo-4';
import { Demo5 } from '../demo/demo-5';
import { Demo6 } from '../demo/demo-6';
import { Demo7 } from '../demo/demo-7';
import { Shell } from './AppShell';
import { TimeTravelObserver } from './TimeTravelObserver';
import { Stack } from './ui/Stack';

const slides = [Demo0, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7];

const DemoComponent = (props: RouteChildrenProps<{ id: string }>) => {
  const history = useHistory();
  const id = Number(props.match?.params.id);

  const previousDisabled = id <= 0;
  const nextDisabled = id >= slides.length - 1;
  const goto = (id: number) => () => {
    history.push(`/demo/${id}`);
  };

  const SlideComponent = slides[id];

  return (
    <>
      <Stack>
        <button onClick={goto(id - 1)} disabled={previousDisabled}>
          Previous
        </button>
        <button onClick={goto(id + 1)} disabled={nextDisabled}>
          Next
        </button>
      </Stack>

      <hr />

      <SlideComponent />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <Shell>
        <Switch>
          <Route path="/demo/:id" component={DemoComponent}></Route>
        </Switch>

        <Route exact path="/">
          <Redirect to="/demo/0"></Redirect>
        </Route>

        <TimeTravelObserver />
      </Shell>
    </Router>
  );
};
