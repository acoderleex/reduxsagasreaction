'use strict';
import request from '../utils/request';

import {
   API_ROOT,
} from '../configs';


function callApi(endPoint,options){
  return request(`${API_ROOT}${endPoint}`,options);
}


export default {

  fetchForumList: ({boardId})=>{
    let url= 'forum/forumlist';
    if (boardId&&boardId!=='all') {
      url+=`&fid=${boardId}`;
    }
    return callApi(url);
  },

  fetchTopicList: ({
      boardId,
      sortType = DEFAULT_SORTTYPE,
      page = DEFAULT_PAGE,
      pageSize = DEFAULT_PAGESIZE
  }) => {
      return callApi(`forum/topiclist&boardId=${boardId}&sortby=${sortType}&page=${page}&pageSize=${pageSize}`);
  }
};
