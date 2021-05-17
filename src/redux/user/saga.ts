import {takeLatest, put, call, delay} from 'redux-saga/effects';

import * as types from './constants';
import {setUser} from './actions';

async function getUser() {
  return Promise.resolve({id: '1', name: 'User 1'});
}

export function* getUserHandler(): any {
  yield delay(1000);
  const user: any = yield call(getUser);
  yield put(setUser(user));
}


export function* userListener() {
  yield takeLatest(types.REQUEST_USER, getUserHandler);
}