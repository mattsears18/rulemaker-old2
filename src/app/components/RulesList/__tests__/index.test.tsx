import * as React from 'react';
import { render } from '@testing-library/react';

import { RulesList } from '..';
import { MockedProvider } from '@apollo/client/testing';

const mocks = [];

describe('<RulesList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <MockedProvider mocks={mocks}>
        <RulesList />
      </MockedProvider>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
