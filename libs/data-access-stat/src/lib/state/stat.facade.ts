import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as StatSelectors from './stat.selectors';

@Injectable()
export class StatFacade {
  constructor(private readonly store: Store) {}

  public readonly stats$ = this.store.pipe(select(StatSelectors.getStats));
}
