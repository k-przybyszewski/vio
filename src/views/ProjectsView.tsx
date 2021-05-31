import * as React from "react";
import { ProjectRepository } from "../repository/ProjectRepository";

export class ProjectsView extends React.Component {

  private repo: ProjectRepository = new ProjectRepository()

  componentDidMount() {
    this.repo.find()
  }

  render() {
    return <div>ProjectsView</div>;
  }
}
