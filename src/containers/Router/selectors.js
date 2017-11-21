export const storeName = 'router';

export function getStore(state) {
  return state.get(storeName);
}
