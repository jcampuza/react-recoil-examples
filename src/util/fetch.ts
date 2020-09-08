export const fetchJson = <T>(...args: Parameters<typeof fetch>): Promise<T> => {
  return fetch(...args).then((r) => r.json());
};
