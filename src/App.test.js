import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders all components on first pageload', () => {
  render(<App />);

  const header = screen.getByText(/let's go shopping/i);
  expect(header).toBeInTheDocument();

  const input = screen.getByRole('textbox', { placeholder: /add an item/i });
  expect(input).toBeInTheDocument();

  const addButton = screen.getByRole('button', { name: /add this item/i });
  expect(addButton).toBeInTheDocument();
});

test('renders new list item and buttons when a user adds a new item', () => {
  render(<App />);

  const input = screen.getByRole('textbox', { placeholder: /add an item/i });
  expect(input).toBeInTheDocument();
  const addButton = screen.getByRole('button', { name: /add this item/i });
  expect(addButton).toBeInTheDocument();

  userEvent.type(input, 'eggs');
  userEvent.click(addButton);

  const listItem = screen.getByRole('list');
  expect(listItem).toBeInTheDocument();

  const editButton = screen.getByRole('button', { name: /edit/i });
  expect(editButton).toBeInTheDocument();

  const deleteButton = screen.getByRole('button', { name: /delete/i });
  expect(deleteButton).toBeInTheDocument();

  // renders save button after a user clicks the edit button

  userEvent.click(editButton);

  const saveButton = screen.getByRole('button', { name: /save/i });
  expect(saveButton).toBeInTheDocument();
});
