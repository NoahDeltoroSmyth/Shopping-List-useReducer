import React, { useState } from 'react';

const Add = ({ addItem }) => {
  const [add, setAdd] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    setAdd('');
    addItem(add);
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="add an item"
        value={add}
        onChange={(e) => setAdd(e.target.value)}
      />
      <button type="submit">Add this item</button>
    </form>
  );
};

export default Add;
