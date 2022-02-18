import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders all components on first pageload', () => {
  render(<App />);

  const header = screen.getByText(/let's go shopping/i);
  expect(header).toBeInTheDocument();

  expect(screen.getByText(/0 items in shopping list/i)).toBeInTheDocument();

  expect(screen.getByRole('button', { name: /clear all/i })).toBeInTheDocument();

  const input = screen.getByRole('textbox', { placeholder: /add an item/i });
  expect(input).toBeInTheDocument();

  const addButton = screen.getByRole('button', { name: /add this item/i });
  expect(addButton).toBeInTheDocument();
});

test('Testing all functionality', () => {
  render(<App />);

  // grab input and add button
  const input = screen.getByRole('textbox', { placeholder: /add an item/i });
  const addButton = screen.getByRole('button', { name: /add this item/i });
  //
  //
  // user can add item
  userEvent.type(input, 'eggs');
  userEvent.click(addButton);
  //
  //
  // check for list item and edit / delete buttons
  const listItem = screen.getByText(/eggs/i);
  expect(listItem).toBeInTheDocument();

  const editButton = screen.getByRole('button', { name: /edit/i });
  expect(editButton).toBeInTheDocument();

  const deleteButton = screen.getByRole('button', { name: /delete/i });
  expect(deleteButton).toBeInTheDocument();
  //
  //
  // when user clicks edit, save button and input with value are shown
  userEvent.click(editButton);

  const editInput = screen.getByRole('textbox', { name: /edit-input/i });
  expect(editInput).toBeInTheDocument();
  expect(screen.getByDisplayValue(/eggs/i)).toBeInTheDocument();

  const saveButton = screen.getByRole('button', { name: /save/i });
  expect(saveButton).toBeInTheDocument();
  //
  //
  // user can edit the value and save it to a new value
  userEvent.type(editInput, '{selectall}{del}bread');
  userEvent.click(saveButton);

  const bread = screen.getByText(/bread/i);
  expect(bread).toBeInTheDocument();
  //
  //
  // user can delete list item and buttons
  const deleteButton2 = screen.getByRole('button', { name: /delete/i });
  userEvent.click(deleteButton2);

  expect(bread).not.toBeInTheDocument();
  expect(editButton).not.toBeInTheDocument();
  expect(deleteButton2).not.toBeInTheDocument();
  //
  //
  // clear all button deletes list items and clears dynamic header to zero
  userEvent.type(input, 'brocolli');
  userEvent.click(addButton);
  userEvent.type(input, 'carrots');
  userEvent.click(addButton);

  const brocolli = screen.getByText(/brocolli/i);
  expect(brocolli).toBeInTheDocument();
  const carrots = screen.getByText(/carrots/i);
  expect(carrots).toBeInTheDocument();
  expect(screen.getByText(/2 items in shopping list/i)).toBeInTheDocument();

  const clearAll = screen.getByRole('button', { name: /clear all/i });
  userEvent.click(clearAll);
  expect(brocolli).not.toBeInTheDocument();
  expect(carrots).not.toBeInTheDocument();
  expect(screen.getByText(/0 items in shopping list/i)).toBeInTheDocument();
});
