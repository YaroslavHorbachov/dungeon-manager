import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dungeon-manager-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent {
  @Input() public steps: string[] = [];

  @Input() public stepIndex = 0;

  @Output() public readonly indexChange = new EventEmitter<number>();

  public onIndexChange(index: number): void {
    this.indexChange.emit(index);
  }
}
