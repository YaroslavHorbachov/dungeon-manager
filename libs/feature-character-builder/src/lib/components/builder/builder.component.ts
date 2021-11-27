import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RepositoryFacade } from '@dungeon-manager/data-access-repository';
import { STEPS } from '../../constants';
import { Routes } from '../../enums';
import { BuilderFacade } from '../../state';

@Component({
  selector: 'dungeon-manager-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderComponent implements OnInit {
  constructor(private readonly builderFacade: BuilderFacade, private readonly repositoryFacade: RepositoryFacade) {}

  public readonly steps = STEPS;

  public readonly routes = Routes;

  public readonly currentStep$ = this.builderFacade.currentStep$;

  public readonly stepIndex$ = this.builderFacade.stepIndex$;

  public ngOnInit(): void {
    this.repositoryFacade.loadRules();
    this.builderFacade.setFirstStep();
  }

  public onIndexChange(index: number): void {
    this.builderFacade.setStepIndex(index);
  }
}
