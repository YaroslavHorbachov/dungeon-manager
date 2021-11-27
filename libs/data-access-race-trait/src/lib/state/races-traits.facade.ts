import { Injectable } from '@angular/core';
import { RepositoryActions } from '@dungeon-manager/data-access-repository';
import { select, Store } from '@ngrx/store';
import * as RacesTraitsSelectors from './races-traits.selectors';

@Injectable()
export class RaceTraitFacade {
  constructor(private readonly store: Store) {}

  public readonly builderTraits$ = this.store.pipe(select(RacesTraitsSelectors.getBuilderTraits));

  public loadRacesTraits(): void {
    this.store.dispatch(RepositoryActions.loadRacesTraits());
  }
}
