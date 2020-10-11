import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('SideNav', () => {
  test('has logo image', () => {
    const { getByAltText } = render(<TestApp />);

    expect(getByAltText('logo')).toBeInTheDocument();
  });

  test('contains types', async () => {
    render(<TestApp />);

    const result = await screen.findByText(/high-rise/);
    expect(result).toBeTruthy();
  });
});
