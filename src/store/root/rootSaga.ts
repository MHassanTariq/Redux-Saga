import {all} from 'redux-saga/effects';
import {addTodoSaga} from '../todos/add/saga';
import {deleteTodoSaga} from '../todos/delete/saga';
import {fetchTodoSaga} from '../todos/fetch/saga';
import {updateTodoSaga} from '../todos/update/saga';

export function* rootSaga() {
  const sagasList = [
    addTodoSaga(),
    fetchTodoSaga(),
    updateTodoSaga(),
    deleteTodoSaga(),
  ];
  yield all(sagasList);
}
