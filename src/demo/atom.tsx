import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { Stack } from '../components/ui/Stack';
import { Text } from '../components/ui/Text';

export const stateAtom = atom({
  key: 'state',
  default: false,
});

export const Component = () => {
  const [state, setState] = useRecoilState(stateAtom);

  return (
    <Stack>
      <Text>Current state is {state}</Text>

      <button
        onClick={() => {
          setState(!state);

          // OR
          // setState(state => !state);
        }}
      ></button>
    </Stack>
  );
};

export const OtherComponent = () => {
  const state = useRecoilValue(stateAtom);

  return (
    <Stack>
      <Text>Current state is {state}</Text>
    </Stack>
  );
};
