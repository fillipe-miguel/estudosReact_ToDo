import React, { useState } from 'react';

// Redux Stuffs
import { useDispatch } from 'react-redux';
import { addItem } from '../../contexts/ListProvider/actions';

// Styles
import './style.css';

const TodoForm = () => {
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

  // TODO: fazer os componentes de input e button para reutilizar no edit-form
  return (
    <form className="todo-form-container">
      <input
        required
        placeholder="Coloque sua tarefa aqui:"
        className="input-task"
        onChange={handleChange}
        type="text"
        value={text}
      ></input>

      <button className="button" onClick={addItemEvent}>
        Adicionar Tarefa
      </button>
    </form>
  );
};

export default TodoForm;
