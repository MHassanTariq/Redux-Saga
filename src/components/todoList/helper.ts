import {Todo} from '../../model';

export function getFewTodosNumber(todos: Todo[], isCompleted: boolean) {
  return todos.filter((todo) => todo.completed === isCompleted).length;
}
