import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dungeon-manager-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WikiComponent {}
