/**
 *
 * RulesList
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {}

export function RulesList(props: Props) {
  return (
    <Div>
      <h2>Rules List</h2>
      <div>a rule</div>
      <div>{process.env.REACT_APP_GRAPHQL_ENDPOINT}</div>
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
