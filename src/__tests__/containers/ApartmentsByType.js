import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('Apartments/index page', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    history.push('/types/1/studio');
    render(
      <Router history={history}>
        <TestApp />
      </Router>,
    );
  });

  test("has text '<type-name> apartments'", async () => {
    const result = await screen.findAllByText((_, node) => node.textContent === 'studio apartments');

    expect(result).toBeTruthy();
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
