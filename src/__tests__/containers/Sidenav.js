import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('SideNav', () => {
  test('has logo image', () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router history={history}>
        <TestApp />
      </Router>,
    );

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  test('contains types', async () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router history={history}>
        <TestApp />
      </Router>,
    );

    const result = await screen.findByText(/high-rise/);
    expect(result).toBeTruthy();
  });
});
