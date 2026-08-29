import { render, screen } from '@testing-library/react';
import App from './App';

test('renders menu items', () => {
  render(<App />);

  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Profile')).toBeInTheDocument();
  expect(screen.getByText('Settings')).toBeInTheDocument();
});
