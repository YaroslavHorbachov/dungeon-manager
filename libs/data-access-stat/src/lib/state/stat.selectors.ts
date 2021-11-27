import { RepositorySelectors } from '@dungeon-manager/data-access-repository';
import { createSelector } from '@ngrx/store';

export const getStats = createSelector(RepositorySelectors.getRules, (rules) => rules?.stats ?? []);
