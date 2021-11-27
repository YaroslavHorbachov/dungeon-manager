import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AbilityMethods } from '../../enums';
import { BuilderRaceSelectProps } from '../../interfaces';
import { BuilderBasicModel } from '../../models';
import * as BuilderActions from './builder.actions';
import * as BuilderSelectors from './builder.selectors';

@Injectable()
export class BuilderFacade {
  constructor(private readonly store: Store) {}

  public readonly stepIndex$ = this.store.pipe(select(BuilderSelectors.getStepIndex));

  public readonly currentStep$ = this.store.pipe(select(BuilderSelectors.getCurrentStep));

  public readonly basic$ = this.store.pipe(select(BuilderSelectors.getBasic));

  public readonly isRaceSelected$ = this.store.pipe(select(BuilderSelectors.getIsRaceSelected));

  public readonly isClassSelected$ = this.store.pipe(select(BuilderSelectors.getIsClassSelected));

  public readonly selectedRace$ = this.store.pipe(select(BuilderSelectors.getSelectedRace));

  public readonly selectedClass$ = this.store.pipe(select(BuilderSelectors.getSelectedClass));

  public readonly abilityMethod$ = this.store.pipe(select(BuilderSelectors.getAbilityMethod));

  public setStepIndex(stepIndex: number): void {
    this.store.dispatch(BuilderActions.setStepIndex({ stepIndex }));
  }

  public nextStep(): void {
    this.store.dispatch(BuilderActions.nextStep());
  }

  public setFirstStep(): void {
    this.store.dispatch(BuilderActions.setFirstStep());
  }

  public setBasic(basic: BuilderBasicModel): void {
    this.store.dispatch(BuilderActions.setBasic({ basic }));
  }

  public setRace(props: BuilderRaceSelectProps): void {
    this.store.dispatch(BuilderActions.setRace(props));
  }

  public resetRace(): void {
    this.store.dispatch(BuilderActions.resetRace());
  }

  public setClass(classId: number): void {
    this.store.dispatch(BuilderActions.setClass({ classId }));
  }

  public resetClass(): void {
    this.store.dispatch(BuilderActions.resetClass());
  }

  public setAbilityMethod(abilityMethod: AbilityMethods): void {
    this.store.dispatch(BuilderActions.setAbilityMethod({ abilityMethod }));
  }

  public setAbilities(data: any): void {
    this.store.dispatch(BuilderActions.setAbilities({ data }));
  }
}
