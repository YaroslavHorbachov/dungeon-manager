interface RepositoryRaceTraitConfiguration {
  readonly RACIALTRAIT: number;
  readonly ABILITYSCORE: number;
  readonly LANGUAGE: number;
  readonly CLASSFEATURE: number;
}

export interface RepositoryRaceTrait {
  readonly displayOrder: number;
  readonly name?: string;
  readonly description: string;
  readonly snippet: string | null;
  readonly hideInBuilder: boolean;
  readonly hideInSheet: boolean;
  readonly isCalledOut: boolean;
  readonly raceId: number;
  readonly subraceId?: number;
  readonly displayConfiguration: RepositoryRaceTraitConfiguration;
}
