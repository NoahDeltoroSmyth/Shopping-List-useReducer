import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = ({ items, deleteItem }) => {
  return (
    <>
      {items.map((item) => (
        <ul key={item.id}>
          <ListItem item={item} deleteItem={deleteItem} />
        </ul>
      ))}
    </>
  );
};

export default List;
