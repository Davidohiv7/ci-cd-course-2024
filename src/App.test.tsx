import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('This is a test');
  expect(linkElement).toBeInTheDocument(); // This should work with jest-dom imported in setup file
});
