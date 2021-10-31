/**
 *
 * RulesList
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useQuery, gql } from '@apollo/client';

const RULES = gql`
  query GetRules {
    rules_aggregate {
      aggregate {
        count
      }
    }
    rules {
      id
      name
      is_public
      created_at
      updated_at
      creator_user {
        id
        first_name
        last_name
      }
    }
  }
`;

interface Props {}

export function RulesList(props: Props) {
  const { loading, error, data } = useQuery(RULES);

  if (loading) return <p>Loading...</p>;
  if (error) {
    throw error;
  }

  return (
    <Div>
      <h4>Rules ({data.rules_aggregate.aggregate.count})</h4>
      {data?.rules?.length &&
        data.rules.map((rule: { id: string; name: string }) => {
          return <div key={rule.id}>{rule.name}</div>;
        })}
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
