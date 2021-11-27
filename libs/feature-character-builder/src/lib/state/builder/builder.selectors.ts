import { ClassesSelectors } from '@dungeon-manager/data-access-class';
import { RacesSelectors } from '@dungeon-manager/data-access-race';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { STEPS } from '../../constants';
import { BUILDER_FEATURE_KEY, State } from './builder.reducer';

export const getBuilderState = createFeatureSelector<State>(BUILDER_FEATURE_KEY);

export const getStepIndex = createSelector(getBuilderState, (state) => state.stepIndex);

export const getCurrentStep = createSelector(getStepIndex, (stepIndex) => STEPS[stepIndex]);

export const getBasic = createSelector(getBuilderState, (state) => state.basic);

const getRaceId = createSelector(getBuilderState, (state) => state.raceId);

const getSubraceId = createSelector(getBuilderState, (state) => state.subraceId);

const getClassId = createSelector(getBuilderState, (state) => state.classId);

export const getAbilityMethod = createSelector(getBuilderState, (state) => state.abilityMethod);

export const getIsClassSelected = createSelector(getClassId, (classId) => Boolean(classId));

export const getSelectedRace = createSelector(
  RacesSelectors.getRaces,
  getRaceId,
  getSubraceId,
  (races, raceId, subraceId) => {
    return races.find((race) => {
      return race.raceId === raceId && race.subraceId === subraceId;
    });
  }
);

export const getIsRaceSelected = createSelector(getSelectedRace, (selectedRace) => Boolean(selectedRace));

export const getSelectedClass = createSelector(ClassesSelectors.getClasses, getClassId, (classes, classId) => {
  return classes.find((classItem) => classItem.id === classId);
});
