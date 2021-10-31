import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { OnlineUsersList } from 'app/components/OnlineUsersList/Loadable';
import { RulesList } from 'app/components/RulesList/Loadable';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <OnlineUsersList />
        <br />
        <RulesList />
      </div>
    </>
  );
}
