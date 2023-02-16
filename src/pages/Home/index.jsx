import React from 'react';

// Components
import Todo from '../../components/Todo';

// Redux stuffs
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

// Reducers
import listReducer from '../../contexts/ListProvider/listReducer';

// Util saves
import { loadList, saveList } from '../../util/localStorageItems';

const Home = () => {
  const store = createStore(listReducer, loadList());

  store.subscribe(() => {
    const list = store.getState();
    saveList(list);
  });

  return (
    <Provider store={store}>
      <h1>TODO NOVO</h1>
      <Todo />
    </Provider>
  );
};

export default Home;
