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

  return (
    <Container>
      <h1 className="todo-title">Todo List NOVO</h1>
      <FormAddTodo></FormAddTodo>
      <TodoList title="TODOS">{items}</TodoList>
    </Container>
  );
};

export default Todo;
