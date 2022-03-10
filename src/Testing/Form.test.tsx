import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../Components/Form';
import { MemoryRouter } from 'react-router';

test('Testing form component', () => {
    const onClick =jest.fn()
  render(<MemoryRouter><Form /></MemoryRouter>);
  const StartBtn = screen.getByText('Start');
  const inputEl = screen.getByTestId('name-input')
  const optionEl = screen.getByTestId('option-el')
fireEvent.click(StartBtn)
expect(inputEl).toBeInTheDocument()
expect(optionEl).toBeInTheDocument()
  expect(onClick).toHaveBeenCalledTimes(0);
});
