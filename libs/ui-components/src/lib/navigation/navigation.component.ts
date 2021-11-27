import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationMenuModel } from '@dungeon-manager/util-shared';

@Component({
  selector: 'dungeon-manager-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Input() public navigationMenus: NavigationMenuModel[] = [];

  public isCollapsed = false;

  public onToggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
