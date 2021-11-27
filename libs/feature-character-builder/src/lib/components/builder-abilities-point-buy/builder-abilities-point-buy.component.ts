import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RepositoryRuleStat } from '@dungeon-manager/util-shared';

@Component({
  selector: 'dungeon-manager-builder-abilities-point-buy',
  templateUrl: './builder-abilities-point-buy.component.html',
  styleUrls: ['./builder-abilities-point-buy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderAbilitiesPointBuyComponent {
  @Input() public stats!: RepositoryRuleStat[];
}
