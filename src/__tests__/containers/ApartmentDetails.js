import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('ApartmentsDetails page', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    history.push('/apartments/1');
    render(
      <Router history={history}>
        <TestApp />
      </Router>,
    );
  });

  test('has apartment Rent', async () => {
    const rent = await screen.findByText('Rent');

    expect(rent).toBeTruthy();
  });

  test('has apartment Reviews', async () => {
    const reviews = await screen.findByText('Reviews');

    expect(reviews).toBeTruthy();
  });

  test('has apartment Amenities', async () => {
    const amenities = await screen.findByText('Amenities');

    expect(amenities).toBeTruthy();
  });

  test('has apartment Deposit', async () => {
    const deposit = await screen.findByText('Deposit');

    expect(deposit).toBeTruthy();
  });

  test('has apartment Lease Length', async () => {
    const leaseLength = await screen.findByText('Lease Length');

    expect(leaseLength).toBeTruthy();
  });

  test('has apartment Sq.Ft.', async () => {
    const squareFeet = await screen.findByText('Sq.Ft.');

    expect(squareFeet).toBeTruthy();
  });

  test('has apartment Type', async () => {
    const type = await screen.findByText('Type');

    expect(type).toBeTruthy();
  });
});
