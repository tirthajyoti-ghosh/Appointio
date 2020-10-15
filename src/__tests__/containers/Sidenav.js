import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('SideNav', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router history={history}>
        <TestApp />
      </Router>,
    );
  });

  test('has logo image', () => {
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  test('contains types', async () => {
    const result = await screen.findByText(/high-rise/);

    expect(result).toBeTruthy();
  });
});
