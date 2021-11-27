import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Levels, RepositoryClassFeature } from '@dungeon-manager/util-shared';

interface ClassFeatureBlock {
  readonly header: string;
  readonly features: RepositoryClassFeature[];
}

@Component({
  selector: 'dungeon-manager-class-features',
  templateUrl: './class-features.component.html',
  styleUrls: ['./class-features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassFeaturesComponent implements OnInit {
  @Input() public models!: RepositoryClassFeature[];

  public blocks: ClassFeatureBlock[] = [];

  public ngOnInit(): void {
    this.blocks = this.composeBlocks();
  }

  public composeBlocks(): ClassFeatureBlock[] {
    return [
      { header: 'One Level', features: this.oneLevelFeatures },
      { header: 'Five Level', features: this.fiveLevelFeature },
      { header: 'Ten Level', features: this.tenLevelFeature },
      { header: 'Twenty Level', features: this.twentyLevelFeature },
    ];
  }

  public get oneLevelFeatures(): RepositoryClassFeature[] {
    return this.filterFeaturesByLevel(Levels.One, Levels.One);
  }

  public get fiveLevelFeature(): RepositoryClassFeature[] {
    return this.filterFeaturesByLevel(Levels.Two, Levels.Five);
  }

  public get tenLevelFeature(): RepositoryClassFeature[] {
    return this.filterFeaturesByLevel(Levels.Six, Levels.Ten);
  }

  public get twentyLevelFeature(): RepositoryClassFeature[] {
    return this.filterFeaturesByLevel(Levels.Eleven, Levels.Twenty);
  }

  private filterFeaturesByLevel(lowLevel: Levels, highLevel: Levels): RepositoryClassFeature[] {
    return this.models.filter((model) => {
      return [model.requiredLevel >= lowLevel, model.requiredLevel <= highLevel].every(Boolean);
    });
  }
}
