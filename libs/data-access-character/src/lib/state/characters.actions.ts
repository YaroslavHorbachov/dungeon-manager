import { CharacterModel } from '@dungeon-manager/util-shared';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Characters Page] Init');

export const loadCharactersSuccess = createAction(
  '[Characters/API] Load Characters Success',
  props<{ characters: CharacterModel[] }>()
);

export const loadCharactersFailure = createAction('[Characters/API] Load Characters Failure', props<{ error: any }>());
