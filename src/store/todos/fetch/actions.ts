import {Todo} from '../../../model';
import {
  FetchTodosRequestAction,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FetchTodosSuccessAction,
  FetchTodosFailureAction,
  FETCH_TODOS_FAILURE,
} from './types';

export function getFetchTodoRequestAction(): FetchTodosRequestAction {
  return {
    type: FETCH_TODOS_REQUEST,
  };
}

export function getFetchTodoSuccessAction(
  todos: Todo[],
): FetchTodosSuccessAction {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos,
  };
}

export function getFetchTodoFailureAction(
  error: string,
): FetchTodosFailureAction {
  return {
    type: FETCH_TODOS_FAILURE,
    error,
  };
}
