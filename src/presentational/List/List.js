import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = ({ items, deleteItem, editItem }) => {
  return (
    <>
      {items.map((item) => (
        <ul key={item.id}>
          <ListItem item={item} deleteItem={deleteItem} editItem={editItem} />
        </ul>
      ))}
    </>
  );
};

export default List;
