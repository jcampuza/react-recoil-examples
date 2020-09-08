import React from 'react';
import { Stack } from '../components/ui/Stack';
import { Text } from '../components/ui/Text';

export const Demo0 = () => {
  return (
    <Stack>
      <Stack>
        <Text variant="title" gutter>
          Intro
        </Text>

        <Text>
          The following few pages will show a couple usage examples of Recoil, as well as explain
          some of the utilities Recoil provides outside it's core API.
        </Text>
      </Stack>

      <hr />
    </Stack>
  );
};
