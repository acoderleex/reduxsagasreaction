'use strict';
import {AsyncStorage} from 'react-native';
import {take, fork, select, put, call} from 'redux-saga/effects';
import {fetchResource} from '../utils/saga_helper';
import api from '../services/api';

import * as forumListActions from '../actions/forumaction';
import * as topicListActions from '../actions/fetchTopicList';

const fetchForumListApi = fetchResource.bind(null, forumListActions, api.fetchForumList);
const fetchTopicListApi = fetchResource.bind(null, topicListActions, api.fetchTopicList);

function * watchForumList() {
    while (true) {
        const {payload} = yield take(forumListActions.REQUEST);
        yield fork(fetchForumList, payload);
    }
}

function * fetchForumList(payload) {
    yield fork(fetchForumListApi, payload);
}

function * watchTopicList() {
    while (true) {
        const {payload} = yield take(topicListActions.REQUEST);
        yield fork(fetchTopicList, payload);
    }
}

function * fetchTopicList(payload) {
    const state = yield select();
    const {boardId, sortType} = payload;
    yield fork(fetchTopicListApi, payload);
}

export default function * rootSaga() {
    yield fork(watchForumList);
    yield fork(watchTopicList);
}
