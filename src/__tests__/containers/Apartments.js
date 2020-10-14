import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('Apartments/index page', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router history={history}>
        <TestApp />
      </Router>,
    );
  });

  test("has text 'Browse all apartments'", () => {
    expect(screen.getByText('Browse all apartments')).toBeInTheDocument();
  });

  test('contains a list of apartments', async () => {
    const result = await screen.findAllByText(/rating/);

    expect(result).toBeTruthy();
  });

  test('has one image per apartment', async () => {
    const result = await screen.findAllByAltText(/apartment/);

    expect(result).toBeTruthy();
  });
});
