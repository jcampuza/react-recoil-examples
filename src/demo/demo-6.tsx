import React from 'react';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { Card } from '../components/Card';
import { Grid, GridItem } from '../components/Grid';
import { Spinner } from '../components/Spinner';
import { Stack } from '../components/Stack';
import { Text } from '../components/Text';
import { searchedUsers, selectedUserIdAtom, selectedUserPosts, userSearch } from '../state/user';

export const Component = () => {
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
      />
    </Stack>
  );
};

export const OtherComponent = () => {
  const [selectedUserId, setSelectedUserId] = useRecoilState(selectedUserIdAtom);
  const users = useRecoilValueLoadable(searchedUsers);

  switch (users.state) {
    case 'loading': {
      return <Spinner />;
    }
    case 'hasError': {
      return <Text>There was an issue loading users</Text>;
    }
    case 'hasValue': {
      const contents = users.contents;

      const renderUsersList = () => {
        if (!contents.length) {
          return <Text>No users found for query {contents}</Text>;
        }

        return (
          <Grid columns={3}>
            {contents.map((user) => (
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
    }
  }
};

export const SelectedUserPosts = ({ userId }: { userId: number }) => {
  const userPosts = useRecoilValueLoadable(selectedUserPosts(userId));

  switch (userPosts.state) {
    case 'loading': {
      return <Spinner />;
    }
    case 'hasError': {
      return <Text>There was an issue loading posts</Text>;
    }
    case 'hasValue': {
      return (
        <Stack>
          <Text variant="title" gutter>
            Posts
          </Text>
          {userPosts.contents.map((post) => {
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
    }
  }
};

export const Demo6 = () => {
  const selectedUserId = useRecoilValue(selectedUserIdAtom);

  return (
    <Stack>
      <Stack>
        <Text variant="title" gutter>
          Loadables
        </Text>

        <Text>
          If we don't want to use Suspense/Error Boundaries in order to handle errors/loading with
          recoil selectors, we can also create Loadables in order to granularly handle these cases.
        </Text>
      </Stack>

      <hr />

      <Grid columns={3}>
        <GridItem>
          <Component />
        </GridItem>
        <GridItem span={2}>
          <OtherComponent />
        </GridItem>
      </Grid>

      {selectedUserId ? (
        <GridItem>
          <SelectedUserPosts userId={selectedUserId} />
        </GridItem>
      ) : null}
    </Stack>
  );
};
