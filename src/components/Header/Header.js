import React from 'react';
import { useShoppingList } from '../../context/ShoppingContext';

const Header = () => {
  const { items, clearAll } = useShoppingList();
  return (
    <>
      <h1 className="main-header">Let&apos;s go shopping</h1>
      <p>{items.length} items in shopping list</p>
      <button onClick={() => clearAll()}>clear all</button>
    </>
  );
};

export default Header;
