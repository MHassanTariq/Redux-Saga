import {Todo} from '../../../model';

export async function deleteTodoFromServer(todo: Todo): Promise<boolean> {
  /**
   * Add delete API call here.
   * Timeout added to simulate the
   * */
  try {
    await setTimeout(() => {}, 500);
    return true;
  } catch {
    return false;
  }
}
