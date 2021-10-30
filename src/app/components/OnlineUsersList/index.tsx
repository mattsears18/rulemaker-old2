/**
 *
 * OnlineUsersList
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export function OnlineUsersList(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      <h2>Online Users</h2>
      <div>user</div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
    </Div>
  );
}

const Div = styled.div`
  border: 1px solid black;
  text-align: center;
  ul {
    list-style: none;
  }
`;
