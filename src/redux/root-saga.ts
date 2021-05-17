import {fork} from 'redux-saga/effects';

import {userListener} from './user/saga';

export default function* root() {
  yield fork(userListener);
}