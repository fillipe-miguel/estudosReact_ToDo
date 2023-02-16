import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Components
import { ButtonForm } from '../commons/form/Button';
import Container from '../commons/layout/Container';
import FormAddTodo from '../FormAddTodo';
import { TodoList } from '../TodoList';

// Styles
import './style.css';

const Todo = () => {
  const [addItemShow, setAddItemShow] = useState(false);
  const items = useSelector((state) => state);

  const itemsDone = items.filter((item) => item.done);
  const itemsNotDone = items.filter((item) => !item.done);

  const toggleAddItemShow = () => {
    setAddItemShow(!addItemShow);
  };

  return (
    <Container>
      {addItemShow && <FormAddTodo />}
      <ButtonForm
        handleEffect={toggleAddItemShow}
        text={
          addItemShow ? 'Cancelar adição de tarefa' : 'Adicionar nova tarefa'
        }
      />

      {itemsNotDone.length > 0 && (
        <TodoList title="A fazer">{itemsNotDone}</TodoList>
      )}
      {itemsDone.length > 0 && <TodoList title="Feitos">{itemsDone}</TodoList>}
    </Container>
  );
};

export default Todo;
