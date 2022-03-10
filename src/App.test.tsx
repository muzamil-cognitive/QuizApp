import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Form from './Components/Form';
import { MemoryRouter } from 'react-router';

test('renders learn react link', () => {
  render(<MemoryRouter><Form /></MemoryRouter>);
  const linkElement = screen.getByText('Fill The form to start');
  expect(linkElement).toBeInTheDocument();
});
