import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { Stack } from '../components/ui/Stack';
import { Text } from '../components/ui/Text';
import { Grid, GridItem } from '../components/ui/Grid';

export const stateAtom = atom({
  key: 'demo1/state',
  default: false,
});

export const Component = () => {
  const [state, setState] = useRecoilState(stateAtom);

  return (
    <Stack>
      <Text gutter>Current state is {`${state}`}</Text>

      <button
        onClick={() => {
          setState(!state);

          // OR
          // setState(state => !state);
        }}
      >
        Toggle State
      </button>
    </Stack>
  );
};

export const OtherComponent = () => {
  const state = useRecoilValue(stateAtom);

  return (
    <Stack>
      <Text>Current state is {`${state}`}</Text>
    </Stack>
  );
};

export const Demo1 = () => {
  return (
    <Stack>
      <Stack>
        <Text variant="title" gutter>
          Atoms
        </Text>

        <Text>
          Atoms (along with selectors) are the basic building blocks of recoil. Their job is simple,
          they store small pieces of state. These pieces of state can then be queried efficiently
          from anywhere in the component tree efficiently and easily with very little boilerplate.
        </Text>
      </Stack>

      <hr />

      <Grid columns={2}>
        <GridItem>
          <Component />
        </GridItem>
        <GridItem>
          <OtherComponent />
        </GridItem>
      </Grid>
    </Stack>
  );
};
