import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormDisabledDirective } from './directives';

const directives = [FormDisabledDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...directives],
  exports: [...directives],
})
export class UtilSharedModule {}
