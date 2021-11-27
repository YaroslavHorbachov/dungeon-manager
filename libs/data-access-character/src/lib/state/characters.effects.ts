import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as CharactersActions from './characters.actions';
import * as CharactersFeature from './characters.reducer';

@Injectable()
export class CharactersEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return CharactersActions.loadCharactersSuccess({ characters: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return CharactersActions.loadCharactersFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
