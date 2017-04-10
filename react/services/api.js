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
};
