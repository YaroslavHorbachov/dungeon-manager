import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationMenuModel } from '@dungeon-manager/util-shared';

@Component({
  selector: 'dungeon-manager-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  public readonly navigationMenus: NavigationMenuModel[] = [
    {
      icon: 'user',
      route: 'characters',
      title: 'Characters',
    },
    {
      icon: 'book',
      route: 'wiki',
      title: 'Wiki',
    },
  ];
}
