import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('Appointments page', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    history.push('/appointments');
    render(
      <Router history={history}>
        <TestApp />
      </Router>,
    );
  });

  test("has 'Your Appointments' text", () => {
    expect(screen.getByText('Your Appointments')).toBeInTheDocument();
  });

  test("has 'Apartment' column", () => {
    expect(screen.getByText('Apartment')).toBeInTheDocument();
  });

  test("has 'Date' column", () => {
    expect(screen.getByText('Date')).toBeInTheDocument();
  });
});
