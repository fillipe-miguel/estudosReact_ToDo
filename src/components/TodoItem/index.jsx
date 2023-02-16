/* eslint-disable react/prop-types */
import React from 'react';

// React-icons
import { FaEdit } from 'react-icons/fa';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { IoTrashBin } from 'react-icons/io5';

//Redux Stuffs
import { useDispatch } from 'react-redux';

// Actions do reducer
import { changeDone, deleteItem } from '../../contexts/ListProvider/actions';

// Components
import { ButtonAction } from './ButtonAction';

// Style
import './style.css';

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  function handleDoneItem() {
    dispatch(changeDone(item.id));
  }

  function handleDeleteItem() {
    dispatch(deleteItem(item.id));
  }

  function handleEditItem() {
    // dispatch(showModal(item))
    console.log('editando....');
  }

  return (
    <li className={item.done ? 'item done' : 'item'}>
      {/* Done Button */}
      <ButtonAction handleEffect={handleDoneItem} customClass="buttom-check">
        {item.done ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </ButtonAction>

      <p className="item-text">{item.text}</p>

      <div className="item-actions-buttons-container">
        {/* Edit Button */}
        <ButtonAction handleEffect={handleEditItem}>
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