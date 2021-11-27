import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RaceFacade } from '@dungeon-manager/data-access-race';
import { RaceTraitFacade } from '@dungeon-manager/data-access-race-trait';
import { BuilderRaceSelectProps } from '../../interfaces';
import { BuilderFacade } from '../../state';

@Component({
  selector: 'dungeon-manager-builder-race',
  templateUrl: './builder-race.component.html',
  styleUrls: ['./builder-race.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderRaceComponent implements OnInit {
  constructor(
    private readonly raceFacade: RaceFacade,
    private readonly raceTraitFacade: RaceTraitFacade,
    public readonly builderFacade: BuilderFacade
  ) {}

  public readonly isRaceSelected$ = this.builderFacade.isRaceSelected$;

  public readonly selectedRace$ = this.builderFacade.selectedRace$;

  public readonly races$ = this.raceFacade.races$;

  public ngOnInit(): void {
    this.raceFacade.loadRaces();
    this.raceTraitFacade.loadRacesTraits();
  }

  public onSelectRace(props: BuilderRaceSelectProps): void {
    this.builderFacade.setRace(props);
  }

  public onChangeRace(): void {
    this.builderFacade.resetRace();
  }

  public onNext(): void {
    this.builderFacade.nextStep();
  }
}
