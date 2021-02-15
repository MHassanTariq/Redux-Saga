import {Todo} from '../../../model';

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

export interface DeleteTodoRequestAction {
  type: typeof DELETE_TODO_REQUEST;
  todo: Todo;
}

export interface DeleteTodoSuccessAction {
  type: typeof DELETE_TODO_SUCCESS;
  todo: Todo;
}

export interface DeleteTodoFailureAction {
  type: typeof DELETE_TODO_FAILURE;
  error: string;
}

export type DeleteTodoActions =
  | DeleteTodoRequestAction
  | DeleteTodoSuccessAction
  | DeleteTodoFailureAction;
