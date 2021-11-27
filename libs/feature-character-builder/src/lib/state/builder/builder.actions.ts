import { createAction, props } from '@ngrx/store';
import { AbilityMethods } from '../../enums';
import { BuilderRaceSelectProps } from '../../interfaces';
import { BuilderBasicModel } from '../../models';

export const setStepIndex = createAction('[Feature Builder] Set Step Index', props<{ stepIndex: number }>());

export const setFirstStep = createAction('[Feature Builder] Set First Step');

export const nextStep = createAction('[Feature Builder] Next Step');

export const setBasic = createAction('[Feature Builder] Set Basic', props<{ basic: BuilderBasicModel }>());

export const setRace = createAction('[Feature Builder] Set Race', props<BuilderRaceSelectProps>());

export const resetRace = createAction('[Feature Builder] Reset Race');

export const setClass = createAction('[Feature Builder] Set Class', props<{ classId: number }>());

export const resetClass = createAction('[Feature Builder] Reset Class');

export const setAbilityMethod = createAction(
  '[Feature Builder] Set Ability Method',
  props<{ abilityMethod: AbilityMethods }>()
);

export const setAbilities = createAction('[Feature Builder] Set Abilities', props<{ [key: string]: number }>());
