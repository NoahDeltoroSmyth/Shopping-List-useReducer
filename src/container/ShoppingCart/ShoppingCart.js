import React, { useReducer } from 'react';
import Controls from '../../presentational/Controls/Controls';
import List from '../../presentational/List/List';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      return [...state, { id: action.id, text: action.text }];
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
  return (
    <>
      ShoppingCart
      <Controls addItem={AddItem} />
      <List items={items} />
    </>
  );
};

export default ShoppingCart;
