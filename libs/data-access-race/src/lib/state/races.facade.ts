import { Injectable } from '@angular/core';
import { RepositoryActions } from '@dungeon-manager/data-access-repository';
import { select, Store } from '@ngrx/store';
import * as RacesSelectors from './races.selectors';

@Injectable()
export class RaceFacade {
  constructor(private readonly store: Store) {}

  public readonly races$ = this.store.pipe(select(RacesSelectors.getRaces));

  public loadRaces(): void {
    this.store.dispatch(RepositoryActions.loadRaces());
  }
}
