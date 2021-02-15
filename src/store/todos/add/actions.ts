import {Todo} from '../../../model';
import {
  AddTodoFailureAction,
  AddTodoRequestAction,
  AddTodoSuccessAction,
  ADD_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
} from './types';

export function getAddTodoRequestAction(
  todoTitle: string,
): AddTodoRequestAction {
  return {
    type: ADD_TODOS_REQUEST,
    todoTitle,
  };
}

export function getAddTodoSuccessAction(todo: Todo): AddTodoSuccessAction {
  return {
    type: ADD_TODOS_SUCCESS,
    todo,
  };
}

export function getAddTodoFailureAction(error: string): AddTodoFailureAction {
  return {
    type: ADD_TODOS_FAILURE,
    error,
  };
}
