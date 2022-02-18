import React, { useState } from 'react';

const ListItem = ({ item, deleteItem, editItem }) => {
  const { text, id } = item;

  const [editing, setEditing] = useState(false);

  return (
    <>
      {editing && (
        <>
          <input
            aria-label="edit-input"
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
          <p>{text}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteItem(id)}>Delete</button>
        </>
      )}
    </>
  );
};

export default ListItem;
