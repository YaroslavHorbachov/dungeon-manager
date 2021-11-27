import { createFeatureSelector, createSelector } from '@ngrx/store';
import { REPOSITORY_FEATURE_KEY, State } from './repository.reducer';

const getRepositoryState = createFeatureSelector<State>(REPOSITORY_FEATURE_KEY);

export const getIsLoading = createSelector(getRepositoryState, (state) => state.isLoading);

export const getRaces = createSelector(getRepositoryState, (state) => state.races);

export const getClasses = createSelector(getRepositoryState, (state) => state.classes);

export const getClassesFeatures = createSelector(getRepositoryState, (state) => state.classesFeatures);

export const getRacesTraits = createSelector(getRepositoryState, (state) => state.racesTraits);

export const getRules = createSelector(getRepositoryState, (state) => state.rules);
