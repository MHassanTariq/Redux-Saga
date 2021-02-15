import {Todo} from '../../../model';
import {
  UpdateTodoFailureAction,
  UpdateTodoRequestAction,
  UpdateTodoSuccessAction,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
} from './types';

export function getUpdateTodoRequestAction(
  todo: Todo,
): UpdateTodoRequestAction {
  return {type: UPDATE_TODO_REQUEST, todo};
}

export function getUpdateTodoSuccessAction(
  todo: Todo,
): UpdateTodoSuccessAction {
  return {
    type: UPDATE_TODO_SUCCESS,
    todo,
  };
}

export function getUpdateTodoFailureAction(
  error: string,
): UpdateTodoFailureAction {
  return {
    type: UPDATE_TODO_FAILURE,
    error,
  };
}
