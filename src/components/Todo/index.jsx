import React from 'react';
import { useSelector } from 'react-redux';

// Components
import { ButtonForm } from '../commons/form/Button';
import Container from '../commons/layout/Container';
import FormAddTodo from '../FormAddTodo';
import { TodoList } from '../TodoList';

// Styles
import './style.css';

const Todo = () => {
  const items = useSelector((state) => state);

  const itemsDone = items.filter((item) => item.done);
  const itemsNotDone = items.filter((item) => !item.done);

  //TODO: fazer o esquema de esconder o form
  return (
    <Container>
      <h1 className="todo-title">Todo List NOVO</h1>
      <FormAddTodo></FormAddTodo>
      <ButtonForm handleEffect={() => {}} text="Toogle Add Form Visibility" />

      {itemsNotDone.length > 0 && (
        <TodoList title="A fazer">{itemsNotDone}</TodoList>
      )}
      {itemsDone.length > 0 && <TodoList title="Feitos">{itemsDone}</TodoList>}
    </Container>
  );
};

export default Todo;
