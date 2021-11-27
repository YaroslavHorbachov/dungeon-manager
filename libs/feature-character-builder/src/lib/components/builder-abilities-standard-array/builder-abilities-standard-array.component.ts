import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RepositoryRuleStat } from '@dungeon-manager/util-shared';

@Component({
  selector: 'dungeon-manager-builder-abilities-standard-array',
  templateUrl: './builder-abilities-standard-array.component.html',
  styleUrls: ['./builder-abilities-standard-array.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderAbilitiesStandardArrayComponent {
  @Input() public stats!: RepositoryRuleStat[];
}
