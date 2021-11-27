import { CharacterModel } from '@dungeon-manager/util-shared';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as CharactersActions from './characters.actions';

export const CHARACTERS_FEATURE_KEY = 'characters';

export interface State extends EntityState<CharacterModel> {
  selectedId?: string | number; // which Characters record has been selected
  loaded: boolean; // has the Characters list been loaded
  error?: string | null; // last known error (if any)
}

export interface CharactersPartialState {
  readonly [CHARACTERS_FEATURE_KEY]: State;
}

export const charactersAdapter: EntityAdapter<CharacterModel> = createEntityAdapter<CharacterModel>();

export const initialState: State = charactersAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const charactersReducer = createReducer(
  initialState,
  on(CharactersActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CharactersActions.loadCharactersSuccess, (state, { characters }) =>
    charactersAdapter.setAll(characters, { ...state, loaded: true })
  ),
  on(CharactersActions.loadCharactersFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return charactersReducer(state, action);
}
