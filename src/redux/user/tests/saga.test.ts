import {put} from 'redux-saga/effects';

import {setUser} from '../actions';
import {getUserHandler} from '../saga';

const user = {
    field1: 'value1',
 };

describe('test user sagas: ', () => {
   it('should request and set user', () => {
      const generator = getUserHandler();
      generator.next();
      generator.next();
      expect(generator.next(user).value).toEqual(put(setUser(user)));
   });
});
