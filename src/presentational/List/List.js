import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <ul key={item.id}>
          <ListItem item={item} />
        </ul>
      ))}
    </>
  );
};

export default List;
