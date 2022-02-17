import { createContext, useContext, useReducer } from 'react';

const ShoppingContext = createContext();

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

const ShoppingProvider = ({ children }) => {
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
  const contextValue = { items, dispatch, AddItem, DeleteItem, EditItem };
  return <ShoppingContext.Provider value={contextValue}>{children}</ShoppingContext.Provider>;
};

const useShoppingList = () => {
  const context = useContext(ShoppingContext);
  if (context === undefined) {
    throw new Error('You must wrap component in a ShoppingContext Provider ');
  }
  return context;
};

export { ShoppingProvider, useShoppingList };
