export enum TaskStatusType {
  New = 1,
  InProgress,
  Done
}

export interface Task {
  id: number;
  subject: string;
  description: string
  status: TaskStatusType;
  createdAt: Date
  updatedAt: Date
  asignee: User;
}

export interface User {
  name: string
  email: string
  password: string
  token: string
}

export interface Project {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  tasks: Array<Task>;
}