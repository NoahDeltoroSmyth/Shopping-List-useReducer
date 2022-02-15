import React from 'react';

const ListItem = ({ item }) => {
  const { text } = item;
  return (
    <>
      {text}
      <button>Edit</button>
      <button>Delete</button>
    </>
  );
};

export default ListItem;
