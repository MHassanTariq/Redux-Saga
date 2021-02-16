import {Todo} from '../../../model';
import {TODO_API} from '../../apis';
/**
 * Fetch API call here.
 * Fetching data from server here.
 * */
export async function fetchTodosFromApi(): Promise<Todo[]> {
  const response = await fetch(TODO_API);
  const json = await response.json();
  return <Todo[]>json;
}
