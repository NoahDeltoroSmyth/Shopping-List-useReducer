import React, { useState } from 'react';

const ListItem = ({ item, deleteItem, editItem }) => {
  const { text, id } = item;

  const [editing, setEditing] = useState(false);

  return (
    <>
      {editing && (
        <>
          <input
            value={text}
            onChange={(e) => {
              editItem({ ...item, text: e.target.value });
            }}
          />
          <button onClick={() => setEditing(false)}>Save</button>
        </>
      )}
      {!editing && (
        <>
          {text}
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteItem(id)}>Delete</button>
        </>
      )}
    </>
  );
};

export default ListItem;
