import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RepositoryActions from './repository.actions';

@Injectable()
export class RepositoryFacade {
  constructor(private readonly store: Store) {}

  public loadRules(): void {
    this.store.dispatch(RepositoryActions.loadRules());
  }
}
