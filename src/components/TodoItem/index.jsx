/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// React-icons
import { FaEdit } from 'react-icons/fa';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { IoTrashBin } from 'react-icons/io5';

//Redux Stuffs
import { useDispatch } from 'react-redux';

// Actions do reducer
import { changeDone, deleteItem } from '../../contexts/ListProvider/actions';

// Components
import FormEditTodo from '../FormEditTodo';
import { ButtonAction } from './ButtonAction';

// Style
import './style.css';

const TodoItem = ({ item }) => {
  const [editItemShow, setEditItemShow] = useState(false);

  const dispatch = useDispatch();

  function handleDoneItem() {
    dispatch(changeDone(item.id));
  }

  function handleDeleteItem() {
    dispatch(deleteItem(item.id));
  }

  function toggleEditShow() {
    setEditItemShow(!editItemShow);
  }

  if (editItemShow)
    return (
      <li className="item edit-form">
        <FormEditTodo handleClose={toggleEditShow} item={item} />
      </li>
    );

  return (
    <li className={item.done ? 'item done' : 'item'}>
      {/* Done Button */}
      <ButtonAction handleEffect={handleDoneItem}>
        {item.done ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </ButtonAction>

      <div className="item-content-wrapper">
        <h3 className="content-title">{item.title}</h3>
        <p className="content-body">{item.body}</p>
      </div>

      <div className="item-actions-buttons-container">
        {/* Edit Button */}
        <ButtonAction handleEffect={toggleEditShow}>
          <FaEdit />
        </ButtonAction>

        {/* Delete Button */}
        <ButtonAction handleEffect={handleDeleteItem}>
          <IoTrashBin />
        </ButtonAction>
      </div>
    </li>
  );
};

export default TodoItem;
