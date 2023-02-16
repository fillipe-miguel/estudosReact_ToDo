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
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  function addItemEvent(event) {
    event.preventDefault();

    if (!text == '') {
      setText('');
      dispatch(addItem(text));
    }
  }

  return (
    <form className="todo-form-container">
      <Input
        handleChange={handleChange}
        value={text}
        placeholder="Adicione sua tarefa aqui:"
      />

      <ButtonForm handleEffect={addItemEvent} text="Adicionar Task" />
    </form>
  );
};

export default FormAddTodo;
