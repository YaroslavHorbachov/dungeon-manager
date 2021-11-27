import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterHitPointTypes } from '@dungeon-manager/util-shared';
import { first, map } from 'rxjs/operators';
import { BuilderBasicModel } from '../../models';
import { BuilderFacade } from '../../state';

@Component({
  selector: 'dungeon-manager-builder-basic',
  templateUrl: './builder-basic.component.html',
  styleUrls: ['./builder-basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderBasicComponent {
  constructor(private readonly formBuilder: FormBuilder, private readonly builderFacade: BuilderFacade) {}

  public readonly characterHitPointTypes = CharacterHitPointTypes;

  public readonly form$ = this.builderFacade.basic$.pipe(
    first(),
    map((initialValue) => this.createForm(initialValue))
  );

  private createForm(initialValue: BuilderBasicModel | null): FormGroup {
    const form = this.formBuilder.group({
      name: [null, Validators.required],
      hitPointType: [CharacterHitPointTypes.Fixed, Validators.required],
    });

    if (initialValue) {
      form.setValue(initialValue);
    }

    return form;
  }

  public onSubmit(form: FormGroup): void {
    this.builderFacade.setBasic(form.value);
    this.builderFacade.nextStep();
  }
}
