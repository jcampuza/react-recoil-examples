import React from 'react';
import { useRecoilValue } from 'recoil';
import { Stack } from '../components/ui/Stack';
import { Text } from '../components/ui/Text';
import { selectedUserIdAtom, userSearch } from '../state/user';
import { themeAtom, themeObjectSelector } from '../state/theme';
import { SimpleSuspense } from '../components/SimpleSuspense';

export const StateViewer = () => {
  const usersQuery = useRecoilValue(userSearch);
  const selectedUserId = useRecoilValue(selectedUserIdAtom);
  const theme = useRecoilValue(themeAtom);
  const themeObject = useRecoilValue(themeObjectSelector);

  return (
    <Stack>
      <Text>Current State:</Text>

      <pre style={{}}>
        {JSON.stringify(
          {
            usersQuery,
            selectedUserId,
            theme,
            themeObject,
          },
          null,
          2
        )}
      </pre>
    </Stack>
  );
};

export const Demo7 = () => {
  return (
    <Stack>
      <Stack>
        <Text variant="title" gutter>
          Misc
        </Text>

        <Text>
          There are a bunch of other cool miscellaneous utilities that recoil provides us, as well
          as many in the works.
        </Text>
      </Stack>

      <hr />

      <Stack>
        <SimpleSuspense>
          <StateViewer />
        </SimpleSuspense>
      </Stack>
    </Stack>
  );
};
