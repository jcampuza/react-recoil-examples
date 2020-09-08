import React from 'react';
import { atom, DefaultValue, selector, useRecoilState, useRecoilValue } from 'recoil';
import { Stack } from '../components/Stack';
import { Text } from '../components/Text';

export const count = atom({
  key: 'count',
  default: 0,
});

export const doubled = selector<number>({
  key: 'countDoubled',
  get({ get }) {
    return get(count) * 2;
  },
  set({ get, set }, value) {
    if (value instanceof DefaultValue) {
      return;
    }

    return set(count, value / 2);
  },
});

export const Component = () => {
  const [state, setState] = useRecoilState(count);

  return (
    <Stack>
      <Text>Current count is {state}</Text>

      <input
        type="number"
        onChange={(e) => {
          setState(Number(e.currentTarget.value));
        }}
      />
    </Stack>
  );
};

export const OtherComponent = () => {
  const state = useRecoilValue(doubled);

  return (
    <Stack>
      <Text>Current state is {state}</Text>
    </Stack>
  );
};
