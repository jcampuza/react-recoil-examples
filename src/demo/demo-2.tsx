import React from 'react';
import { atom, DefaultValue, selector, useRecoilState } from 'recoil';
import { Grid, GridItem } from '../components/ui/Grid';
import { Stack } from '../components/ui/Stack';
import { Text } from '../components/ui/Text';

export const count = atom({
  key: 'count',
  default: 0,
});

export const doubled = selector<number>({
  key: 'countDoubled',
  get({ get }) {
    return Math.abs(get(count) * 2);
  },
  set({ get, set }, value) {
    if (value instanceof DefaultValue) {
      return;
    }

    return set(count, value / 2);
  },
});

export const CurrentCount = () => {
  const [state, setState] = useRecoilState(count);

  return (
    <Stack>
      <Text>Current count is {state}</Text>

      <input
        type="number"
        value={state}
        onChange={(e) => {
          setState(Number(e.currentTarget.value));
        }}
      />
    </Stack>
  );
};

export const DoubledCount = () => {
  const [state, setState] = useRecoilState(doubled);

  return (
    <Stack>
      <Text>Doubled count is {state}</Text>

      <input
        type="number"
        value={state}
        onChange={(e) => {
          setState(Number(e.currentTarget.value));
        }}
      />
    </Stack>
  );
};

export const Demo2 = () => {
  return (
    <Stack>
      <Stack>
        <Text variant="title" gutter>
          Selectors
        </Text>

        <Text>
          Selectors are another basic building block of recoil. These can be used to store derived
          state, or pieces of state based on collections of atoms, or other selectors. These can be
          queried in the same way as atoms, with the same hooks, and in fact they can be set as
          well.
        </Text>
      </Stack>

      <hr />

      <Grid columns={2}>
        <GridItem>
          <CurrentCount />
        </GridItem>
        <GridItem>
          <DoubledCount />
        </GridItem>
      </Grid>
    </Stack>
  );
};
