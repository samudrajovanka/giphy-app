import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';
import { Provider } from 'react-redux';
import store from '../../store';

it('Home component rendered', () => {
  render(<Provider store={store}><Home /></Provider>);

  const searchInput = screen.getByTestId('search-gif-input');
  const searchButton = screen.getByTestId('search-gif-button');

  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});
