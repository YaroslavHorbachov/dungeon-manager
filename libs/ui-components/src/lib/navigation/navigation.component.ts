import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dungeon-manager-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public isCollapsed = false;

  public onToggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
