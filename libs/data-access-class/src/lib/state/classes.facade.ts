import { Injectable } from '@angular/core';
import { RepositoryActions } from '@dungeon-manager/data-access-repository';
import { select, Store } from '@ngrx/store';
import * as ClassesSelectors from './classes.selectors';

@Injectable()
export class ClassFacade {
  constructor(private readonly store: Store) {}

  public readonly classes$ = this.store.pipe(select(ClassesSelectors.getClasses));

  public loadClasses(): void {
    this.store.dispatch(RepositoryActions.loadClasses());
  }
}
