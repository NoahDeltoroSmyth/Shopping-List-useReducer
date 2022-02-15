import React from 'react';
// import ListItem from '../ListItem/ListItem';

const List = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <ul key={item.id}>
          <span>{item.text}</span>
        </ul>
      ))}
    </>
  );
};

export default List;
