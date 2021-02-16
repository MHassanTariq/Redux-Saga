import {Todo} from '../../../model';
import {TODO_API} from '../../apis';

export async function addTodoOnServer(title: string): Promise<Todo> {
  // Api call to add todo on server.
  try {
    const response = await fetch(TODO_API, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const json = await response.json();
    return <Todo>json;
  } catch (error) {
    return error;
  }
}
