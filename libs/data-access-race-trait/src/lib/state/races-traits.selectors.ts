import { RepositorySelectors } from '@dungeon-manager/data-access-repository';
import { createSelector } from '@ngrx/store';

export const getBuilderTraits = createSelector(RepositorySelectors.getRacesTraits, (racesTraits) => {
  return racesTraits.filter((racialTrait) => !racialTrait.hideInBuilder);
});
