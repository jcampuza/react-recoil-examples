import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Card } from '../components/Card';
import { DefaultErrorBoundary } from '../components/DefaultErrorBoundary';
import { DefaultSuspense } from '../components/DefaultSuspense';
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
  const userQuery = useRecoilValue(userSearch);
  const users = useRecoilValue(searchedUsers);

  const renderUsersList = () => {
    if (!users.length) {
      return <Text>No users found for query {userQuery}</Text>;
    }

    return (
      <Grid columns={3}>
        {users.map((user) => (
          <GridItem key={user.id}>
            <Card>{user.name}</Card>
          </GridItem>
        ))}
      </Grid>
    );
  };

  return (
    <Stack>
      <Text gutter>Found users</Text>

      {renderUsersList()}
    </Stack>
  );
};

export const Demo4 = () => {
  return (
    <Stack>
      <Stack>
        <Text variant="title" gutter>
          Async Selectors (Suspense)
        </Text>

        <Text>
          By making use of the Suspense component and ErrorBoundary components at more granular
          levels, we can declaratively handle loading and errors with recoil selectors.
        </Text>
      </Stack>

      <hr />

      <Grid columns={3}>
        <GridItem>
          <UserQuery />
        </GridItem>
        <GridItem span={2}>
          <DefaultSuspense>
            <DefaultErrorBoundary>
              <QueriedUsers />
            </DefaultErrorBoundary>
          </DefaultSuspense>
        </GridItem>
      </Grid>
    </Stack>
  );
};

// With Suspense wrapper
