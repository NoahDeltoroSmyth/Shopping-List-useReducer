import React from 'react';
import { useShoppingList } from '../../context/ShoppingContext';

const Header = () => {
  const { items } = useShoppingList();
  return (
    <>
      <h1 className="main-header">Let&apos;s go shopping</h1>
      <span>{items.length} items in shopping list</span>
    </>
  );
};

export default Header;
