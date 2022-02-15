import React, { useState } from 'react';

const Controls = () => {
  const [add, setAdd] = useState('');

  const handleAdd = () => {};

  return (
    <>
      Controls
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="add an item"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <button type="submit">Add this item</button>
      </form>
    </>
  );
};

export default Controls;
