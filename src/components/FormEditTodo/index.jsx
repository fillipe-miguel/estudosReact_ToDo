import P from 'prop-types';
import React, { useEffect, useState } from 'react';

// Redux stuffs
import { useDispatch } from 'react-redux';
import { editItem } from '../../contexts/ListProvider/actions';

// Components
import { ButtonForm } from '../commons/form/Button';
import Input from '../commons/form/Input';

// style
import './style.css';

const FormEditTodo = ({ handleClose, item }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    setTitle(item.title);
    setBody(item.body);
    return () => {
      setTitle('');
      setBody('');
    };
  }, [item.title, item.body]);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleBodyChange(event) {
    setBody(event.target.value);
  }

  function editItemEvent() {
    if (!title == '' && !body == '') {
      setTitle('');
      dispatch(editItem(item.id, title, body));
      handleClose();
    }
  }

  return (
    <div className="form-edit-container">
      <Input
        handleChange={handleTitleChange}
        value={title}
        placeholder="Edite sua tarefa aqui:"
      />
      <Input
        handleChange={handleBodyChange}
        value={body}
        placeholder="Edite sua tarefa aqui:"
      />
      <ButtonForm handleEffect={editItemEvent} text="Salvar Edição" />
      <ButtonForm handleEffect={handleClose} text="Cancelar Edição" />
    </div>
  );
};

FormEditTodo.propTypes = {
  handleClose: P.func.isRequired,
  item: P.object.isRequired,
};

export default FormEditTodo;
