import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RaceModel } from '@dungeon-manager/util-shared';

@Component({
  selector: 'dungeon-manager-builder-race-details',
  templateUrl: './builder-race-details.component.html',
  styleUrls: ['./builder-race-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderRaceDetailsComponent {
  @Input() public model!: RaceModel;

  @Output() public readonly next = new EventEmitter<void>();

  @Output() public readonly changeRace = new EventEmitter<void>();

  public onNext(): void {
    this.next.emit();
  }

  public onChangeRace(): void {
    this.changeRace.emit();
  }
}
