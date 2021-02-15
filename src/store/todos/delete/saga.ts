import {call, put, takeEvery} from 'redux-saga/effects';
import {
  getDeleteTodoFailureAction,
  getDeleteTodoSuccessAction,
} from './actions';
import {deleteTodoFromServer} from './helper';
import {DeleteTodoRequestAction, DELETE_TODO_REQUEST} from './types';

function* handleDeleteTodo(action: DeleteTodoRequestAction) {
  try {
    const isDeletedFromServer = yield call(deleteTodoFromServer, action.todo);
    if (isDeletedFromServer) yield put(getDeleteTodoSuccessAction(action.todo));
  } catch (error) {
    put(getDeleteTodoFailureAction(error));
  }
}
export function* deleteTodoSaga() {
  yield takeEvery(DELETE_TODO_REQUEST, handleDeleteTodo);
}
