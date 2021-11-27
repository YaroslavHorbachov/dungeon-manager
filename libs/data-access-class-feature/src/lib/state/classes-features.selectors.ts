import { RepositorySelectors } from '@dungeon-manager/data-access-repository';
import { createSelector } from '@ngrx/store';

export const getFeatures = createSelector(RepositorySelectors.getClassesFeatures, (features) => features);
