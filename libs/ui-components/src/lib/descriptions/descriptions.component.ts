import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

interface Model {
  readonly name?: string | null;
  readonly description?: string | null;
}

@Component({
  selector: 'dungeon-manager-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionsComponent {
  @Input() public title!: string;

  @Input() public models!: Model[];
}
