import { Injectable } from '@angular/core';
import { RepositoryActions } from '@dungeon-manager/data-access-repository';
import { select, Store } from '@ngrx/store';
import * as ClassesFeaturesSelectors from './classes-features.selectors';

@Injectable()
export class ClassesFeaturesFacade {
  constructor(private readonly store: Store) {}

  public readonly features$ = this.store.pipe(select(ClassesFeaturesSelectors.getFeatures));

  public loadClassesFeatures(): void {
    this.store.dispatch(RepositoryActions.loadClassesFeatures());
  }
}
