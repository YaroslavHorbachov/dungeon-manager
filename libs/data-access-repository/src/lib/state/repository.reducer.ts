import {
  RepositoryClass,
  RepositoryClassFeature,
  RepositoryRace,
  RepositoryRaceTrait,
  RepositoryRules,
} from '@dungeon-manager/util-shared';
import { Action, createReducer, on } from '@ngrx/store';
import * as RepositoryActions from './repository.actions';

export const REPOSITORY_FEATURE_KEY = 'repository';

export interface State {
  readonly isLoading: boolean;
  readonly races: RepositoryRace[];
  readonly classes: RepositoryClass[];
  readonly classesFeatures: RepositoryClassFeature[];
  readonly racesTraits: RepositoryRaceTrait[];
  readonly rules: RepositoryRules | null;
}

export const initialState: State = {
  isLoading: false,
  races: [],
  classes: [],
  classesFeatures: [],
  racesTraits: [],
  rules: null,
};

const repositoryReducer = createReducer(
  initialState,

  on(
    RepositoryActions.loadRaces,
    RepositoryActions.loadClasses,
    RepositoryActions.loadRacesTraits,
    RepositoryActions.loadClassesFeatures,
    RepositoryActions.loadRules,
    (state) => ({ ...state, isLoading: true })
  ),

  on(RepositoryActions.loadRacesSuccess, (state, { data }) => ({ ...state, races: data, isLoading: false })),

  on(RepositoryActions.loadClassesFeaturesSuccess, (state, { data }) => ({
    ...state,
    classesFeatures: data,
    isLoading: false,
  })),

  on(RepositoryActions.loadRacesTraitsSuccess, (state, { data }) => ({
    ...state,
    racesTraits: data,
    isLoading: false,
  })),

  on(RepositoryActions.loadClassesSuccess, (state, { data }) => ({ ...state, classes: data, isLoading: false })),

  on(RepositoryActions.loadRulesSuccess, (state, { data }) => ({ ...state, rules: data, isLoading: false }))
);

export function reducer(state: State | undefined, action: Action) {
  return repositoryReducer(state, action);
}
