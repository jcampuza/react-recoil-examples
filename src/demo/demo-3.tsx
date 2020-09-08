import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Card } from '../components/Card';
import { Grid, GridItem } from '../components/Grid';
import { Stack } from '../components/Stack';
import { Text } from '../components/Text';
import { searchedUsers, userSearch } from '../state/user';

export const UserQuery = () => {
  const [state, setState] = useRecoilState(userSearch);

  return (
    <Stack>
      <Text>Query for users</Text>

      <input
        value={state}
        type="text"
        placeholder="Search for users"
        onChange={(e) => {
          setState(e.currentTarget.value);
        }}
      ></input>
    </Stack>
  );
};

export const QueriedUsers = () => {
  const users = useRecoilValue(searchedUsers);

  return (
    <Stack>
      <Text gutter>Found users</Text>

      <Grid columns={3}>
        {users.map((user) => (
          <GridItem key={user.id}>
            <Card>{user.name}</Card>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export const Demo3 = () => {
  return (
    <Stack>
      <Stack>
        <Text variant="title" gutter>
          Async Selectors
        </Text>

        <Text>
          Selectors can also be used to run asynchronous processing/logic. If you return a promise
          from a selector, then we can take advantage of other react features which we'll see more
          of soon in order to wait for this processsing to complete. This example uses just one
          Suspense and Error Boundary at the top level of the tree to render.
        </Text>
      </Stack>

      <hr />

      <Grid columns={3}>
        <GridItem>
          <UserQuery />
        </GridItem>
        <GridItem span={2}>
          <QueriedUsers />
        </GridItem>
      </Grid>
    </Stack>
  );
};

// Without Suspense wrapper
