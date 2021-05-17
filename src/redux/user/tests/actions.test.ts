import {requestUser, setUser} from '../actions';

const user = {
   field1: 'value1',
};

describe('request user action test', () => {
   it('dispatches request user action', () => {
      expect(requestUser()).toMatchSnapshot();
   });
});
describe('set user action test', () => {
    it('dispatches set user action', () => {
       expect(setUser(user)).toMatchSnapshot();
    });
 });