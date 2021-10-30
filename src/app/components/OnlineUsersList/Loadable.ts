/**
 *
 * Asynchronously loads the component for OnlineUsersList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const OnlineUsersList = lazyLoad(
  () => import('./index'),
  module => module.OnlineUsersList,
);
