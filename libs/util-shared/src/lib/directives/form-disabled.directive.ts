import { Directive, HostBinding } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[dungeonManagerFormDisabled]',
})
export class FormDisabledDirective {
  constructor(private readonly formGroupDirective: FormGroupDirective) {}

  @HostBinding('disabled')
  public get disabled(): boolean {
    return !this.formGroupDirective.form.valid;
  }
}
