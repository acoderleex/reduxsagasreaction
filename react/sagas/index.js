'use strict';
import { AsyncStorage } from 'react-native';
import { take, fork, select, put, call } from 'redux-saga/effects';
import { fetchResource } from '../utils/saga_helper';
import api from '../services/api';

import * as forumListActions from '../actions/forumaction';

const fetchForumListApi = fetchResource.bind(null,forumListActions,api.fetchForumList);

function* watchForumList(){
  while (true) {
    const { payload } = yield take(forumListActions.REQUEST);
    yield fork(fetchForumList,payload);
  }
}

function* fetchForumList(payload){
  yield fork(fetchForumListApi, payload);
}

export default function* rootSaga() {
  yield fork(watchForumList);
}
