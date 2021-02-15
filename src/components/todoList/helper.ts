import {Todo} from '../../model';

export function getFewTodosNumber(todos: Todo[], isCompleted: boolean) {
  console.log(todos);
  return todos.filter((todo) => todo.completed === isCompleted).length;
}
