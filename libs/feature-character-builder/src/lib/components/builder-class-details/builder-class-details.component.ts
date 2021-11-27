import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ClassModel } from '@dungeon-manager/util-shared';

@Component({
  selector: 'dungeon-manager-builder-class-details',
  templateUrl: './builder-class-details.component.html',
  styleUrls: ['./builder-class-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderClassDetailsComponent {
  @Input() public model!: ClassModel;

  @Output() public readonly changeClass = new EventEmitter<void>();

  @Output() public readonly next = new EventEmitter<void>();

  public onChangeClass(): void {
    this.changeClass.emit();
  }

  public onNext(): void {
    this.next.emit();
  }
}
