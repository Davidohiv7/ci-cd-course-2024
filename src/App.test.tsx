import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the app', () => {
  render(<App />);
  const linkElement = screen.getByText('This is a test');
  expect(linkElement).toBeInTheDocument();
});
