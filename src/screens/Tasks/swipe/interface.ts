export interface Task {
  date?: string;
  id: string;
  priority?: string;
  title?: string;
  description?: string;
  status?: string;
}

export interface TaskItem {
  item: Task;
}
