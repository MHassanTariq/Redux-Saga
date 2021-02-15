import {Todo} from '../../model';
import {ADD_TODOS_SUCCESS} from './add/types';
import {DELETE_TODO_SUCCESS} from './delete/types';
import {FETCH_TODOS_SUCCESS} from './fetch/types';
import {TodoActions} from './types';
import {UPDATE_TODO_SUCCESS} from './update/types';

export type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [],
};

const todosReducer = (
  state: TodoState = initialState,
  action: TodoActions,
): TodoState => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {todos: action.todos};
    case ADD_TODOS_SUCCESS:
      return {todos: state.todos.concat(action.todo)};
    case UPDATE_TODO_SUCCESS:
      const updated = [...state.todos];
      updated.splice(
        updated.findIndex((todo) => todo.id === action.todo.id),
        1,
        action.todo,
      );
      return {todos: updated};
    case DELETE_TODO_SUCCESS:
      return {todos: state.todos.filter((todo) => todo.id !== action.todo.id)};
    default:
      return state;
  }
};
export default todosReducer;
