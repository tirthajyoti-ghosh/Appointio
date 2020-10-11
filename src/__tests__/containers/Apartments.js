import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('Apartments/index page', () => {
  test("has text 'Browse all apartments'", () => {
    const { getByText } = render(<TestApp />);

    expect(getByText('Browse all apartments')).toBeInTheDocument();
  });

  test('contains a list of apartments', async () => {
    render(<TestApp />);

    const result = await screen.findAllByText(/rating/);
    expect(result).toBeTruthy();
  });

  test('has one image per apartment', async () => {
    render(<TestApp />);

    const result = await screen.findAllByAltText(/apartment/);
    expect(result).toBeTruthy();
  });
});
