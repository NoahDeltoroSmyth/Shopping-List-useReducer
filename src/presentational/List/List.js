import React from 'react';
// import ListItem from '../ListItem/ListItem';

const List = ({ items }) => {
  console.log('items', items);
  return (
    <div>
      list
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
        </li>
      ))}
    </div>
  );
};

export default List;
