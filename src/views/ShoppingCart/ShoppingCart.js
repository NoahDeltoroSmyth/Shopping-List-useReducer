import React from 'react';
import Add from '../../components/AddItem/AddItem';
import List from '../../components/List/List';
import { useShoppingList } from '../../context/ShoppingContext';

const ShoppingCart = () => {
  const { items, DeleteItem, AddItem, EditItem } = useShoppingList();

  return (
    <>
      <Add addItem={AddItem} />
      <List items={items} deleteItem={DeleteItem} editItem={EditItem} />
    </>
  );
};

export default ShoppingCart;
