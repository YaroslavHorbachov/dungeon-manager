import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dungeon-manager-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent {
  @Input() public character: string | undefined;
}
