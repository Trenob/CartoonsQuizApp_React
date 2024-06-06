import { render, screen } from '@testing-library/react';
import App from './App';

test('checking for Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/The Toon Quiz/);
  expect(linkElement).toBeInTheDocument();
});
