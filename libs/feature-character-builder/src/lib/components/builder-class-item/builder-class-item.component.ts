import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ClassModel } from '@dungeon-manager/util-shared';

@Component({
  selector: 'dungeon-manager-builder-class-item',
  templateUrl: './builder-class-item.component.html',
  styleUrls: ['./builder-class-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderClassItemComponent {
  @Input() public model!: ClassModel;
}
