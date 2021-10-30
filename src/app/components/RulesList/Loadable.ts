/**
 *
 * Asynchronously loads the component for RulesList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const RulesList = lazyLoad(
  () => import('./index'),
  module => module.RulesList,
);
