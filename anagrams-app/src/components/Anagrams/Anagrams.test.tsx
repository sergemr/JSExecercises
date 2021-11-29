import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Anagrams from './Anagrams';

import {checkAnagrams} from './Anagrams';

describe('<Anagrams />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Anagrams />);
    const anagrams = getByTestId('Anagrams');

    expect(anagrams).toBeInTheDocument();
  });
  test('perfect lower case', () => {
    const result= [["ate", "eat"]];
    expect(checkAnagrams(['ate','eat'])).toStrictEqual(result);
  });
});

