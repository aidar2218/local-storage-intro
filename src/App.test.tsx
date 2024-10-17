import React from 'react';
import { render, screen } from '@testing-library/react';
import LocalStorage from './LocalStorage';

test('renders learn react link', () => {
  render(<LocalStorage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
