const SAVED_ITEMS = 'savedItems';

export function saveList(list) {
  localStorage.setItem(SAVED_ITEMS, JSON.stringify(list));
}

export function loadList() {
  const actualState = localStorage.getItem(SAVED_ITEMS);
  if (actualState) {
    return JSON.parse(actualState);
  } else {
    return [];
  }
}
