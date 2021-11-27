import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'characters',
      },
      {
        path: 'characters',
        loadChildren: async () => {
          const module = await import('@dungeon-manager/feature-characters');

          return module.FeatureCharactersModule;
        },
      },
      {
        path: 'wiki',
        loadChildren: async () => {
          const module = await import('@dungeon-manager/feature-wiki');

          return module.FeatureWikiModule;
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureDashboardRoutingModule {}
