export interface Task {
  date?: string;
  id: string;
  priority?: string;
  title?: string;
  description?: string;
}

export interface TaskItem {
  item: Task;
}
