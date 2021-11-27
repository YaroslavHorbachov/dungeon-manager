import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatFacade } from '@dungeon-manager/data-access-stat';
import { AbilityMethods } from '../../enums';
import { BuilderFacade } from '../../state';

@Component({
  selector: 'dungeon-manager-builder-abilities',
  templateUrl: './builder-abilities.component.html',
  styleUrls: ['./builder-abilities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderAbilitiesComponent {
  constructor(private readonly builderFacade: BuilderFacade, private readonly statFacade: StatFacade) {}

  public readonly abilityMethod$ = this.builderFacade.abilityMethod$;

  public readonly stats$ = this.statFacade.stats$;

  public readonly abilityMethods = AbilityMethods;

  public onSelectMethod(abilityMethod: AbilityMethods) {
    this.builderFacade.setAbilityMethod(abilityMethod);
  }
}
