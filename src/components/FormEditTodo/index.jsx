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
  const [text, setText] = useState('');

  useEffect(() => {
    setText(item.text);
    return () => {
      setText('');
    };
  }, [item.text]);

  function handleChange(event) {
    setText(event.target.value);
  }

  function editItemEvent() {
    if (!text == '') {
      setText('');
      dispatch(editItem(item.id, text));
      handleClose();
    }
  }

  return (
    <div className="form-edit-container">
      <Input
        handleChange={handleChange}
        value={text}
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
