import {Todo} from '../../model';
import {ADD_TODOS_SUCCESS} from './add/types';
import {DELETE_TODO_SUCCESS} from './delete/types';
import {FETCH_TODOS_SUCCESS} from './fetch/types';
import {TodoActions} from './types';
import {UPDATE_TODO_SUCCESS} from './update/types';

// This is to store the todo state of our application.

export type TodoState = {
  todos: Todo[];
};

// initializing the state

const initialState: TodoState = {
  todos: [],
};

const todosReducer = (
  state: TodoState = initialState,
  action: TodoActions,
): TodoState => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        todos: action.todos,
      };

    case ADD_TODOS_SUCCESS:
      return {
        todos: [action.todo, ...state.todos],
      };

    case UPDATE_TODO_SUCCESS:
      const updatedTodos = updateTodoList(state.todos, action.todo);
      return {
        todos: updatedTodos,
      };

    case DELETE_TODO_SUCCESS:
      const todosResult = state.todos.filter(
        (todo) => todo.id !== action.todo.id,
      );
      return {
        todos: todosResult,
      };
    default:
      return state;
  }
};
export default todosReducer;

function updateTodoList(todos: Todo[], updatedTodo: Todo) {
  const indexToUpdate = todos.findIndex((todo) => todo.id === updatedTodo.id);
  if (indexToUpdate < 0) {
    return todos;
  }
  const updatedTodos = [...todos];
  updatedTodos.splice(indexToUpdate, 1, updatedTodo);
  return updatedTodos;
}
