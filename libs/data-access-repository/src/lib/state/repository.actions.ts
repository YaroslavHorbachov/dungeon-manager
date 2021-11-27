import {
  RepositoryClass,
  RepositoryClassFeature,
  RepositoryRace,
  RepositoryRaceTrait,
  RepositoryRules,
} from '@dungeon-manager/util-shared';
import { createAction, props } from '@ngrx/store';

function createLoadRepositoryEntity<Data>(actionType: string) {
  const load = createAction(`[Repository] Load ${actionType}`);
  const loadSuccess = createAction(`[Repository] Load ${actionType} Success`, props<{ data: Data }>());

  return [load, loadSuccess] as [typeof load, typeof loadSuccess];
}

export const [loadRaces, loadRacesSuccess] = createLoadRepositoryEntity<RepositoryRace[]>('Races');
export const [loadRacesTraits, loadRacesTraitsSuccess] =
  createLoadRepositoryEntity<RepositoryRaceTrait[]>('Races Treats');
export const [loadClasses, loadClassesSuccess] = createLoadRepositoryEntity<RepositoryClass[]>('Classes');
export const [loadClassesFeatures, loadClassesFeaturesSuccess] =
  createLoadRepositoryEntity<RepositoryClassFeature[]>('Classes Features');
export const [loadRules, loadRulesSuccess] = createLoadRepositoryEntity<RepositoryRules>('Rules');
