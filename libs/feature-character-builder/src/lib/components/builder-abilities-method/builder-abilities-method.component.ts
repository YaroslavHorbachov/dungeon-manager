import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BuilderFacade } from '@dungeon-manager/feature-character-builder';
import { first, map } from 'rxjs/operators';
import { AbilityMethods } from '../../enums';

@Component({
  selector: 'dungeon-manager-builder-abilities-method',
  templateUrl: './builder-abilities-method.component.html',
  styleUrls: ['./builder-abilities-method.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderAbilitiesMethodComponent {
  constructor(private readonly builderFacade: BuilderFacade, private readonly formBuilder: FormBuilder) {}

  @Output() public readonly selectMethod = new EventEmitter<AbilityMethods>();

  public readonly abilityMethodControl$ = this.builderFacade.abilityMethod$.pipe(
    first(),
    map((value) => {
      return this.formBuilder.control(value);
    })
  );

  public readonly abilityMethods = AbilityMethods;

  public onSelectMethod(value: AbilityMethods): void {
    this.selectMethod.emit(value);
  }
}
