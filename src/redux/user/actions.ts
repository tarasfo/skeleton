import {action} from '../helpers';
import * as types from './constants';

export const requestUser = () =>  action(types.REQUEST_USER);

export const setUser = (user: any) =>  action(types.SET_USER, user);