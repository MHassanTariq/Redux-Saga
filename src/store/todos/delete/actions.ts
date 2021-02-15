import {Todo} from '../../../model';
import {
  DeleteTodoFailureAction,
  DeleteTodoRequestAction,
  DeleteTodoSuccessAction,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
} from './types';

export function getDeleteTodoRequestAction(
  todo: Todo,
): DeleteTodoRequestAction {
  return {
    type: DELETE_TODO_REQUEST,
    todo,
  };
}
export function getDeleteTodoSuccessAction(
  todo: Todo,
): DeleteTodoSuccessAction {
  return {
    type: DELETE_TODO_SUCCESS,
    todo,
  };
}

export function getDeleteTodoFailureAction(
  error: string,
): DeleteTodoFailureAction {
  return {
    type: DELETE_TODO_FAILURE,
    error,
  };
}
