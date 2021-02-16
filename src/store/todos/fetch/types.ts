import {Todo} from '../../../model';

export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export interface FetchTodosRequestAction {
  type: typeof FETCH_TODOS_REQUEST;
}

export interface FetchTodosSuccessAction {
  type: typeof FETCH_TODOS_SUCCESS;
  todos: Todo[];
}

export interface FetchTodosFailureAction {
  type: typeof FETCH_TODOS_FAILURE;
  error: string;
}

export type FetchTodoActions =
  | FetchTodosRequestAction
  | FetchTodosSuccessAction
  | FetchTodosFailureAction;
