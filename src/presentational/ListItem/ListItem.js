import React from 'react';

const ListItem = ({ item, deleteItem }) => {
  console.log('deleteItem', deleteItem);
  const { text, id } = item;
  return (
    <>
      {text}
      <button>Edit</button>
      <button onClick={() => deleteItem(id)}>Delete</button>
    </>
  );
};

export default ListItem;
