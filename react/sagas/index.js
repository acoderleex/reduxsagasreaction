'use strict';
import {AsyncStorage} from 'react-native';
import {take, fork, select, put, call} from 'redux-saga/effects';
import {fetchResource} from '../utils/saga_helper';
import api from '../services/api';

import * as forumListActions from '../actions/forumaction';
import * as topicListActions from '../actions/fetchTopicList';
import * as topListActions from '../actions/topListAction';

const fetchForumListApi = fetchResource.bind(null, forumListActions, api.fetchForumList);
const fetchTopicListApi = fetchResource.bind(null, topicListActions, api.fetchTopicList);
const fetchTopListApi = fetchResource.bind(null,topListActions,api.fetchTopList);

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

function * fetchTopList(payload) {
    const state = yield select();
    const {boardId, sortType} = payload;
    yield fork(fetchTopListApi, payload);
}

function * watchTopList() {
    while (true) {
        const {payload} = yield take(topListActions.REQUEST);
        yield fork(fetchTopList, payload);
    }
}

export default function * rootSaga() {
    yield fork(watchForumList);
    yield fork(watchTopicList);
    yield fork(watchTopList);
}
