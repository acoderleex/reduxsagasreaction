'use static';
import {createAction} from 'redux-actions';

export const REQUEST = Symbol();
export const INVALIDATE = Symbol();
export const RESET = Symbol();

export const fetchTopList = createAction(REQUEST);
export const invalidateTopList = createAction(INVALIDATE);
export const resetTopList = createAction(RESET);

export const REQUEST_START = Symbol();
export const REQUEST_COMPELTED = Symbol();
export const REQUEST_FAILED = Symbol();

export const request = createAction(REQUEST_START);
export const success = createAction(REQUEST_COMPELTED, null, (...args) => args[1]);
export const failure = createAction(REQUEST_FAILED, null, (...args) => args[1]);
