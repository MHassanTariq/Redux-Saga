import {Todo} from '../../../model';

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';

export interface UpdateTodoRequestAction {
  type: typeof UPDATE_TODO_REQUEST;
  todo: Todo;
}

export interface UpdateTodoSuccessAction {
  type: typeof UPDATE_TODO_SUCCESS;
  todo: Todo;
}

export interface UpdateTodoFailureAction {
  type: typeof UPDATE_TODO_FAILURE;
  error: string;
}

export type UpdateTodoActions =
  | UpdateTodoFailureAction
  | UpdateTodoRequestAction
  | UpdateTodoSuccessAction;
