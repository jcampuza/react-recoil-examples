import { atom, selector, selectorFamily } from 'recoil';
import { User } from '../types/user';
import { Post } from '../types/post';
import { fetchJson } from '../util/fetch';

const JSON_PLACEHOLDER_BASE = 'https://jsonplaceholder.typicode.com';

export const userSearch = atom({
  key: 'usersQuery',
  default: '',
});

export const searchedUsers = selector({
  key: 'usersApiSearch',
  async get({ get }) {
    const users = await fetchJson<User[]>(`/api/users?q=${get(userSearch)}`);

    return users;
  },
});

// Selected Users

export const selectedUserIdAtom = atom({
  key: 'selectedUser',
  default: 0,
});

export const selectedUserPosts = selectorFamily({
  key: 'selectedUserPosts',
  get: (param: number) => async ({ get }) => {
    const posts = await fetchJson<Post[]>(`${JSON_PLACEHOLDER_BASE}/posts?userId=${param}`);

    return posts;
  },
});
