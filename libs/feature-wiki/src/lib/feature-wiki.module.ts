import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WikiComponent } from './components/wiki/wiki.component';
import { FeatureWikiRoutingModule } from './feature-wiki-routing.module';

@NgModule({
  declarations: [WikiComponent],
  imports: [CommonModule, FeatureWikiRoutingModule],
})
export class FeatureWikiModule {}
