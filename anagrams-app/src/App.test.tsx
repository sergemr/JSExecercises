import React from 'react';
import { render, cleanup,  } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  afterEach(cleanup);

  test('it should mount', () => {

    const { getByTestId } = render(<App />);
    const app = getByTestId('App');

    expect(app).toBeInTheDocument();
  });
});
 