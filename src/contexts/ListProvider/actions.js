import { Item } from './class/item';
import * as types from './types';

export function addItem(text) {
  const item = new Item(text);
  return { type: types.ADD_ITEM, payload: item };
}

export function deleteItem(id) {
  return { type: types.DELETE_ITEM, payload: id };
}

export function changeDone(id) {
  return { type: types.CHANGE_DONE, payload: id };
}

export function editItem(id, text) {
  return { type: types.EDIT_ITEM, payload: { id, text } };
}
