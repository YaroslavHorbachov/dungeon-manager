import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dungeon-manager-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
