import {Todo} from '../../../model';

export const ADD_TODOS_REQUEST = 'ADD_TODOS_REQUEST';
export const ADD_TODOS_SUCCESS = 'ADD_TODOS_SUCCESS';
export const ADD_TODOS_FAILURE = 'ADD_TODOS_FAILURE';

export interface AddTodoRequestAction {
  type: typeof ADD_TODOS_REQUEST;
  todoTitle: string;
}

export interface AddTodoSuccessAction {
  type: typeof ADD_TODOS_SUCCESS;
  todo: Todo;
}

export interface AddTodoFailureAction {
  type: typeof ADD_TODOS_FAILURE;
  error: string;
}

export type AddTodoActions =
  | AddTodoRequestAction
  | AddTodoFailureAction
  | AddTodoSuccessAction;
