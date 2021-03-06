import { render, screen } from '@testing-library/react';
import EtoileApp from './App';

test('renders learn react link', () => {
  render(<EtoileApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});