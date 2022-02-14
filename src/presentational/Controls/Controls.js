import React, { useState } from 'react';

const Controls = () => {
  const [add, setAdd] = useState('');

  return (
    <>
      Controls
      <form>
        <input
          type="text"
          placeholder="add an item"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <button>Add this item</button>
      </form>
    </>
  );
};

export default Controls;
