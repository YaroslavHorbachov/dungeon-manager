import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CharactersActions from './characters.actions';
import * as CharactersFeature from './characters.reducer';
import * as CharactersSelectors from './characters.selectors';

@Injectable()
export class CharactersFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CharactersSelectors.getCharactersLoaded));
  allCharacters$ = this.store.pipe(select(CharactersSelectors.getAllCharacters));
  selectedCharacters$ = this.store.pipe(select(CharactersSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(CharactersActions.init());
  }
}
