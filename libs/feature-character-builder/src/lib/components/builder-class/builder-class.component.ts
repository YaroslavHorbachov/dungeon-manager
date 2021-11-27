import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClassFacade } from '@dungeon-manager/data-access-class';
import { ClassesFeaturesFacade } from '@dungeon-manager/data-access-class-feature';
import { BuilderFacade } from '../../state';

@Component({
  selector: 'dungeon-manager-builder-class',
  templateUrl: './builder-class.component.html',
  styleUrls: ['./builder-class.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderClassComponent implements OnInit {
  constructor(
    private readonly builderFacade: BuilderFacade,
    private readonly classFacade: ClassFacade,
    private readonly classFeatureFacade: ClassesFeaturesFacade
  ) {}

  public readonly classes$ = this.classFacade.classes$;

  public readonly isClassSelected$ = this.builderFacade.isClassSelected$;

  public readonly selectedClass$ = this.builderFacade.selectedClass$;

  public ngOnInit(): void {
    this.classFacade.loadClasses();
    this.classFeatureFacade.loadClassesFeatures();
  }

  public onSelectClass(id: number): void {
    this.builderFacade.setClass(id);
  }

  public onNext(): void {
    this.builderFacade.nextStep();
  }

  public onChangeClass(): void {
    this.builderFacade.resetClass();
  }
}
