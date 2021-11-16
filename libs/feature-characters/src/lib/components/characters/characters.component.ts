import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dungeon-manager-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent {
  public readonly characters = ['One', 'Two'];
}
