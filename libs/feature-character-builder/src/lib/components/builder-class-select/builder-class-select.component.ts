import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ClassModel } from '@dungeon-manager/util-shared';

@Component({
  selector: 'dungeon-manager-builder-class-select',
  templateUrl: './builder-class-select.component.html',
  styleUrls: ['./builder-class-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderClassSelectComponent {
  @Input() public models: ClassModel[] = [];

  @Output() public readonly selectClass = new EventEmitter<number>();

  public onSelectClass(id: number): void {
    this.selectClass.emit(id);
  }

  public modelTrackBy(_: number, model: ClassModel): number {
    return model.id;
  }
}
