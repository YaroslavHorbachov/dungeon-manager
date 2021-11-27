import { Action, createReducer, on } from '@ngrx/store';
import { AbilityMethods } from '../../enums';
import { BuilderBasicModel } from '../../models';
import * as BuilderActions from './builder.actions';

export const BUILDER_FEATURE_KEY = 'builder';

export interface State {
  readonly stepIndex: number;
  readonly basic: BuilderBasicModel | null;
  readonly raceId: number | null;
  readonly subraceId: number | null;
  readonly classId: number | null;
  readonly abilityMethod: AbilityMethods;
}

const initialState: State = {
  stepIndex: 0,
  basic: null,
  raceId: null,
  subraceId: null,
  classId: null,
  abilityMethod: AbilityMethods.StandardArray,
};

const builderReducer = createReducer(
  initialState,

  on(BuilderActions.setStepIndex, (state, { stepIndex }) => ({
    ...state,
    stepIndex,
  })),

  on(BuilderActions.setFirstStep, (state) => ({
    ...state,
    stepIndex: 0,
  })),

  on(BuilderActions.nextStep, (state) => ({
    ...state,
    stepIndex: state.stepIndex + 1,
  })),

  on(BuilderActions.setBasic, (state, { basic }) => ({
    ...state,
    basic,
  })),

  on(BuilderActions.setRace, (state, { raceId, subraceId }) => ({
    ...state,
    raceId,
    subraceId,
  })),

  on(BuilderActions.resetRace, (state) => ({
    ...state,
    raceId: null,
    subraceId: null,
  })),

  on(BuilderActions.setClass, (state, { classId }) => ({
    ...state,
    classId,
  })),

  on(BuilderActions.resetClass, (state) => ({
    ...state,
    classId: null,
  })),

  on(BuilderActions.setAbilityMethod, (state, { abilityMethod }) => ({
    ...state,
    abilityMethod,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return builderReducer(state, action);
}
