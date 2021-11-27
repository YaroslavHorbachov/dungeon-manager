import { RepositoryClass, RepositoryClassFeature } from '../interfaces';

export class ClassModel {
  public readonly id!: number;
  public readonly name!: string;
  public readonly description!: string;
  public readonly avatarUrl!: string;
  public readonly portraitAvatarUrl!: string;
  public readonly features!: RepositoryClassFeature[];
  public readonly hitDice!: number;

  constructor(repositoryModel: RepositoryClass, features: RepositoryClassFeature[]) {
    const { id, name, description, avatarUrl, portraitAvatarUrl, hitDice } = repositoryModel;

    Object.assign(this, { id, name, description, avatarUrl, portraitAvatarUrl, features, hitDice });
  }
}
