import { BaseRepository } from './BaseRepository'

export class ProjectRepository extends BaseRepository {

  constructor() {
    super("/projects")
  }
}