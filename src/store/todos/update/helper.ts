import {Todo} from '../../../model';

export async function updateTodoOnServer(todo: Todo): Promise<boolean> {
  /**
   * Add update call here.
   * Timeout added to simulate the
   * */
  try {
    await setTimeout(() => {}, 500);
    return true;
  } catch {
    return false;
  }
}
