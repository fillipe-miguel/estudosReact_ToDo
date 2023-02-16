import { listData } from './data';
import * as types from './types';

export default (state = listData, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return [...state, action.payload];

    case types.DELETE_ITEM:
      return state.filter((i) => i.id != action.payload);

    case types.CHANGE_DONE:
      return state.map((it) => {
        if (it.id == action.payload) it.done = !it.done;
        return it;
      });

    case types.EDIT_ITEM:
      return state.map((it) => {
        if (it.id == action.payload.id) it.text = action.payload.text;
        return it;
      });

    default:
      return state;
  }
};
