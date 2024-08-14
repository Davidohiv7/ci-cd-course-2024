import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Renders a button', () => {
  render(<Button />);
  const button = screen.getByText('This is a button');
  expect(button).toBeInTheDocument();
});
