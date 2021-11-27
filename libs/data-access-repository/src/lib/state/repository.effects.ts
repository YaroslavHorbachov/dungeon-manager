import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TypedAction } from '@ngrx/store/src/models';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import { RepositoryService } from '../services/repository.service';
import * as RepositoryActions from './repository.actions';

@Injectable()
export class RepositoryEffects {
  constructor(private readonly actions$: Actions, private readonly repositoryService: RepositoryService) {}

  public readonly loadRaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepositoryActions.loadRaces),
      fetch({
        run: () => {
          return this.repositoryService.loadRaces().pipe(
            map(({ data }) => {
              return RepositoryActions.loadRacesSuccess({ data });
            })
          );
        },
        onError: this.handleError,
      })
    )
  );

  public readonly loadClasses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepositoryActions.loadClasses),
      fetch({
        run: () => {
          return this.repositoryService.loadClasses().pipe(
            map(({ data }) => {
              return RepositoryActions.loadClassesSuccess({ data });
            })
          );
        },
        onError: this.handleError,
      })
    )
  );

  public readonly loadRacesTraits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepositoryActions.loadRacesTraits),
      fetch({
        run: () => {
          return this.repositoryService.loadRacesTraits().pipe(
            map(({ data }) => {
              return RepositoryActions.loadRacesTraitsSuccess({ data });
            })
          );
        },
        onError: this.handleError,
      })
    )
  );

  public readonly loadClassesFeatures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepositoryActions.loadClassesFeatures),
      fetch({
        run: () => {
          return this.repositoryService.loadClassesFeatures().pipe(
            map(({ data }) => {
              return RepositoryActions.loadClassesFeaturesSuccess({ data });
            })
          );
        },
        onError: this.handleError,
      })
    )
  );

  public readonly loadRules$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepositoryActions.loadRules),
      fetch({
        run: () => {
          return this.repositoryService.loadRules().pipe(
            map(({ data }) => {
              return RepositoryActions.loadRulesSuccess({ data });
            })
          );
        },
        onError: this.handleError,
      })
    )
  );

  private handleError(_: TypedAction<string>, error: unknown): void {
    console.error('Error', error);
  }
}
