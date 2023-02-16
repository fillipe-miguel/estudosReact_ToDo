import React, { useState } from 'react';

// Redux Stuffs
import { useDispatch } from 'react-redux';
import { addItem } from '../../contexts/ListProvider/actions';

// Components
import { ButtonForm } from '../commons/form/Button';
import Input from '../commons/form/Input';

// Styles
import './style.css';

const FormAddTodo = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState({ title: '', body: '' });

  function handleTitleChange(event) {
    setItem({ ...item, title: event.target.value });
  }

  function handleBodyChange(event) {
    setItem({ ...item, body: event.target.value });
  }

  function addItemEvent(event) {
    event.preventDefault();

    if (!item.title == '') {
      setItem({ body: '', title: '' });
      dispatch(addItem(item));
    }
  }

  return (
    <form className="todo-form-container">
      <Input
        handleChange={handleTitleChange}
        value={item.title}
        placeholder="Adicione o título da sua tarefa aqui:"
      />
      <Input
        handleChange={handleBodyChange}
        value={item.body}
        placeholder="Adicione sua tarefa aqui:"
      />

      <ButtonForm handleEffect={addItemEvent} text="Adicionar Task" />
    </form>
  );
};

export default FormAddTodo;
