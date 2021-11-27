import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dungeon-manager-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent {
  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

  public readonly characters = ['One', 'Two'];

  public onClick(): void {
    this.router.navigate(['builder'], { relativeTo: this.activatedRoute });
  }
}
