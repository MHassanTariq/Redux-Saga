import {call, put, takeEvery} from 'redux-saga/effects';
import {
  getUpdateTodoFailureAction,
  getUpdateTodoSuccessAction,
} from './actions';
import {updateTodoOnServer} from './helper';
import {UpdateTodoRequestAction, UPDATE_TODO_REQUEST} from './types';

function* handleUpdateTodo(action: UpdateTodoRequestAction) {
  try {
    const isUpdatedOnServer: boolean = yield call(
      updateTodoOnServer,
      action.todo,
    );
    if (isUpdatedOnServer) yield put(getUpdateTodoSuccessAction(action.todo));
  } catch (error) {
    yield put(getUpdateTodoFailureAction(error));
  }
}

export function* updateTodoSaga() {
  yield takeEvery(UPDATE_TODO_REQUEST, handleUpdateTodo);
}
