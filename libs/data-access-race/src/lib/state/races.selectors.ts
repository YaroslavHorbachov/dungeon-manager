import { RacesTraitsSelectors } from '@dungeon-manager/data-access-race-trait';
import { RepositorySelectors } from '@dungeon-manager/data-access-repository';
import { RaceModel } from '@dungeon-manager/util-shared';
import { createSelector } from '@ngrx/store';
import { sortBy } from 'lodash';

export const getRaces = createSelector(
  RepositorySelectors.getRaces,
  RacesTraitsSelectors.getBuilderTraits,
  (races, traits) => {
    return races.map((race) => {
      const targetRaceTraits = traits.filter((raceTrait) => {
        if (raceTrait.subraceId) {
          return [raceTrait.subraceId === race.subraceId, raceTrait.raceId === race.raceId].every(Boolean);
        } else {
          return raceTrait.raceId === race.raceId;
        }
      });
      const sortedRaceTraits = sortBy(targetRaceTraits, ({ displayOrder }) => displayOrder);

      return new RaceModel(race, sortedRaceTraits);
    });
  }
);
