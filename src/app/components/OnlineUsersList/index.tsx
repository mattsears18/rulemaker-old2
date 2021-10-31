/**
 *
 * OnlineUsersList
 *
 */
import * as React from 'react';
import { useSubscription, gql } from '@apollo/client';
import styled from 'styled-components/macro';

const ONLINE_USERS_SUBSCRIPTION = gql`
  subscription MySubscription {
    online_users {
      first_name
      last_name
      last_seen
    }
  }
`;

interface Props {}

export function OnlineUsersList(props: Props) {
  const { loading, error, data } = useSubscription(ONLINE_USERS_SUBSCRIPTION);

  if (error) {
    throw error;
  }

  return (
    <Div>
      <h2>Online Users ({!loading && data.online_users.length})</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.online_users.map(
            (user: { id: string; first_name: string; last_name: string }) => {
              return (
                <div key={user.id}>
                  {user.first_name} {user.last_name}
                </div>
              );
            },
          )}
        </div>
      )}
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
