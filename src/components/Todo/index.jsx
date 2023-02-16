import React from 'react';
import { useSelector } from 'react-redux';

// Components
import Container from '../commons/layout/Container';
import FormAddTodo from '../FormAddTodo';
import { TodoList } from '../TodoList';

// Styles
import './style.css';

const Todo = () => {
  const items = useSelector((state) => state);

  const itemsDone = items.filter((item) => item.done);
  const itemsNotDone = items.filter((item) => !item.done);
  console.log('🚀 ~ file: index.jsx:17 ~ Todo ~ itemsNotDone', itemsNotDone);
  console.log('🚀 ~ file: index.jsx:16 ~ Todo ~ itemsDoned', itemsDone);

  return (
    <Container>
      <h1 className="todo-title">Todo List NOVO</h1>
      <FormAddTodo></FormAddTodo>
      {itemsNotDone.length > 0 && (
        <TodoList title="A fazer">{itemsNotDone}</TodoList>
      )}
      {itemsDone.length > 0 && <TodoList title="Feitos">{itemsDone}</TodoList>}
    </Container>
  );
};

export default Todo;
