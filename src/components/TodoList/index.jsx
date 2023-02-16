import P from 'prop-types';

// Components
import TodoItem from '../TodoItem';

// Style
import './style.css';

export const TodoList = ({ title, children }) => {
  return (
    <>
      <h1 className="list-title">{title}</h1>
      <ul>
        {children.map((todoItem) => {
          return <TodoItem key={todoItem.id} item={todoItem}></TodoItem>;
        })}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  title: P.string.isRequired,
  children: P.array.isRequired,
};
