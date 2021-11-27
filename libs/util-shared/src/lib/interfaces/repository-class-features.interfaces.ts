export interface RepositoryClassFeature {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly requiredLevel: number;
  readonly displayOrder: number;
  readonly classId: number;
}
