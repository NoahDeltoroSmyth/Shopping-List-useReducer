import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const header = screen.getByText(/let's go shopping/i);
  expect(header).toBeInTheDocument();
});
