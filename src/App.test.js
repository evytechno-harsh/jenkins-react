import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CI/CD React Lab heading', () => {
  render(<App />);
  const heading = screen.getByText(/CI\/CD React Lab/i);
  expect(heading).toBeInTheDocument();
});
