import reducer from '../reducer';
import {requestUser, setUser} from '../actions';

const user = {
    field1: 'value1',
 };

describe('test user reducer', () => {
   it('it should set isUserRetreiving when requestUser action dispatched', () => {
      const state = reducer({} as any, requestUser());
      expect(state.isUserRetreiving).toBeTruthy();
   });
   it('it should set user from payload', () => {
    const state = reducer({} as any, setUser(user));
    expect(state.user).toBe(user);
    expect(state.isUserRetreiving).toBeFalsy();
   });
});
