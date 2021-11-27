import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RaceModel } from '@dungeon-manager/util-shared';
import { BuilderRaceSelectProps } from '../../interfaces';

@Component({
  selector: 'dungeon-manager-builder-race-select',
  templateUrl: './builder-race-select.component.html',
  styleUrls: ['./builder-race-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderRaceSelectComponent {
  @Input() public models: RaceModel[] = [];

  @Output() public readonly selectRace = new EventEmitter<BuilderRaceSelectProps>();

  public onSelectRace(model: RaceModel): void {
    const { raceId, subraceId } = model;

    this.selectRace.emit({ raceId, subraceId });
  }
}
