import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
  },
  {
    path: 'builder',
    loadChildren: async () => {
      const module = await import('@dungeon-manager/feature-character-builder');

      return module.FeatureCharacterBuilderModule;
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureCharactersRoutingModule {}
