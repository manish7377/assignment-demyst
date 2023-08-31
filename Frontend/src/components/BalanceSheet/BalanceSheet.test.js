import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BalanceSheet from './BalanceSheet';

jest.mock('./fetch');

test('fetches and displays balance sheet data', async () => {
  const mockOnSubmit = jest.fn();
  const { getByText } = render(<BalanceSheet selectedProvider="some-provider" onSubmit={mockOnSubmit} />);

  fireEvent.click(getByText('Fetch Balance Sheet'));

  await new Promise((resolve) => setTimeout(resolve, 0)); 

  const yearCell = getByText('2023');
  expect(yearCell).toBeInTheDocument();
});

test('submits balance sheet data', async () => {
  const mockOnSubmit = jest.fn();
  const { getByText, queryByText } = render(<BalanceSheet selectedProvider="some-provider" onSubmit={mockOnSubmit} />);

  fireEvent.click(getByText('Fetch Balance Sheet'));

  await new Promise((resolve) => setTimeout(resolve, 0)); 

  fireEvent.click(getByText('Next'));

  expect(mockOnSubmit).toHaveBeenCalledWith([
    { year: 2023, month: 'January', profitOrLoss: 5000, assetsValue: 100000 },
  ]);
});
