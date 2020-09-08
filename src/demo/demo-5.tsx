import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Card } from '../components/ui/Card';
import { SimpleErrorBoundary } from '../components/SimpleErrorBoundary';
import { SimpleSuspense } from '../components/SimpleSuspense';
import { Grid, GridItem } from '../components/ui/Grid';
import { Stack } from '../components/ui/Stack';
import { Text } from '../components/ui/Text';
import { searchedUsers, selectedUserIdAtom, selectedUserPosts, userSearch } from '../state/user';

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
  const userQuery = useRecoilValue(userSearch);
  const [selectedUserId, setSelectedUserId] = useRecoilState(selectedUserIdAtom);

  const renderUsersList = () => {
    if (!users.length) {
      return <Text>No users found for query {userQuery}</Text>;
    }

    return (
      <Grid columns={3}>
        {users.map((user) => (
          <GridItem key={user.id}>
            <Card
              tabIndex={0}
              role="button"
              selected={user.id === selectedUserId}
              onClick={() => {
                setSelectedUserId(user.id);
              }}
            >
              {user.name}
            </Card>
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

export const SelectedUserPosts = ({ userId }: { userId: number }) => {
  const userPosts = useRecoilValue(selectedUserPosts(userId));

  return (
    <Stack>
      <Text variant="title" gutter>
        Posts
      </Text>
      {userPosts.map((post) => {
        return (
          <Stack key={post.id}>
            <Text variant="subtitle" gutter>
              {post.title}
            </Text>
            <Text>{post.body}</Text>
          </Stack>
        );
      })}
    </Stack>
  );
};

export const Demo5 = () => {
  const selectedUserId = useRecoilValue(selectedUserIdAtom);

  return (
    <Stack>
      <Stack>
        <Text variant="title" gutter>
          Atom/Selector Family
        </Text>

        <Text>
          Sometimes we need to create groups of atoms/selectors dynamically. Recoil includes
          atomFamily and selectorFamily in order to accomplish this. These can also be used in order
          to run selectors/atoms with a param.
        </Text>
      </Stack>

      <hr />

      <Grid columns={3}>
        <GridItem>
          <UserQuery />
        </GridItem>
        <GridItem span={2}>
          <SimpleSuspense>
            <SimpleErrorBoundary>
              <QueriedUsers />
            </SimpleErrorBoundary>
          </SimpleSuspense>
        </GridItem>
      </Grid>

      {selectedUserId ? (
        <GridItem>
          <SimpleSuspense>
            <SelectedUserPosts userId={selectedUserId} />
          </SimpleSuspense>
        </GridItem>
      ) : null}
    </Stack>
  );
};
