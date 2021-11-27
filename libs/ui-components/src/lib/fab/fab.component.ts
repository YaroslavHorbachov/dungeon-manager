import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dungeon-manager-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabComponent {
  @Output() public readonly fabClick = new EventEmitter<void>();

  public readonly offsetBottom = 10;

  public onClick(): void {
    this.fabClick.emit();
  }
}
