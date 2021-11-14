/**
 *
 * RulesList
 *
 */
import * as React from 'react';
import { useQuery, gql } from '@apollo/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Rules ({data.rules_aggregate.aggregate.count})
            </Typography>
            {data?.rules?.length &&
              data.rules.map((rule: { id: string; name: string }) => {
                return <Typography key={rule.id}>{rule.name}</Typography>;
              })}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
