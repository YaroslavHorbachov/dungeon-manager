import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RaceModel } from '@dungeon-manager/util-shared';

@Component({
  selector: 'dungeon-manager-builder-race-item',
  templateUrl: './builder-race-item.component.html',
  styleUrls: ['./builder-race-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderRaceItemComponent {
  @Input() public race!: RaceModel;
}
