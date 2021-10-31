import * as React from 'react';
import { render } from '@testing-library/react';

import { OnlineUsersList } from '..';
import { MockedProvider } from '@apollo/client/testing';

const mocks = [];

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<OnlineUsersList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <MockedProvider mocks={mocks}>
        <OnlineUsersList />
      </MockedProvider>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
