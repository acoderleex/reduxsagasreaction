'use strict';
import request from '../utils/request';

import {API_ROOT} from '../configs';

const DEFAULT_SORTTYPE = 'all';
const DEFAULT_PAGE = 1;
const DEFAULT_PAGESIZE = 20;

function callApi(endPoint, options) {
    return request(`${API_ROOT}${endPoint}`, options);
}

export default {

    fetchTopicList : ({
        boardId,
        sortType = DEFAULT_SORTTYPE,
        page = DEFAULT_PAGE,
        pageSize = DEFAULT_PAGESIZE
    }) => {
        return callApi(`forum/topiclist&boardId=${boardId}&sortby=${sortType}&page=${page}&pageSize=${pageSize}`);
    },
    fetchForumList : ({boardId}) => {
        let url = 'forum/forumlist';
        if (boardId && boardId !== 'all') {
            url += `&fid=${boardId}`;
        }
        return callApi(url);
    }
};
