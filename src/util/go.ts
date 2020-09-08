type Success<T> = [T, null];
type Failure<E> = [null, E];

export const go = async <T, E = any>(promise: Promise<T>): Promise<Success<T> | Failure<E>> => {
  try {
    const result = await promise;

    return [result, null];
  } catch (error) {
    return [null, error];
  }
};
