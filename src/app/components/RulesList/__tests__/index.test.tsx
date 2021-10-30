import * as React from 'react';
import { render } from '@testing-library/react';

import { RulesList } from '..';

describe('<RulesList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<RulesList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
