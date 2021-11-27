import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BuilderComponent } from './components';

const routes: Route[] = [
  {
    path: '',
    component: BuilderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureCharacterBuilderRoutingModule {}
