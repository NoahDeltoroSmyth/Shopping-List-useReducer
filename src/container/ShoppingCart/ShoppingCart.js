import React, { useReducer } from 'react';
import Controls from '../../presentational/Controls/Controls';
import List from '../../presentational/List/List';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      return [...state, { id: action.id, text: action.text }];
    }
    case 'delete': {
      return state.filter((state) => state.id !== action.id);
    }
    case 'edit': {
      return state.map((s) => {
        if (s.id === action.task.id) {
          return action.task;
        }
        return s;
      });
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
}

const ShoppingCart = () => {
  const [items, dispatch] = useReducer(reducer, initialState);

  const AddItem = (text) => {
    dispatch({
      type: 'add',
      id: items.length + 1,
      text: text,
    });
  };

  const DeleteItem = (item) => {
    dispatch({
      type: 'delete',
      id: item,
    });
  };

  const EditItem = (task) => {
    dispatch({
      type: 'edit',
      task,
    });
  };
  return (
    <>
      <h1>Let&apos;s go shopping</h1>
      <Controls addItem={AddItem} />
      <List items={items} deleteItem={DeleteItem} editItem={EditItem} />
    </>
  );
};

export default ShoppingCart;
