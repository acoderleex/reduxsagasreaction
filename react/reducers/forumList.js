'use strict';

import _ from 'lodash';

import {
  INVAILIDATE,
  REQUEST_START,
  REQUEST_COMPELTED,
  REQUEST_FAILED
} from '../actions/forumaction';

const defaultState={};
const defaultForumListState={
  isRefreshing: false,
  didInvaliate: false,
  list:[]
};

export default function forumList(state = defaultState, action){
  switch (action.type) {
    case INVAILIDATE:{
      let { boardId } = action.payload;
      return{
          ...state,
          [boardId]: {
            ..._.get(state,boardId,defaultForumListState),
            didInvaliate: true
          }
      };
    }
    case REQUEST_START:{
      let { boardId } = action.payload;
      return{
        ...state,
        [boardId]:{
          ..._.get(state,boardId,defaultForumListState),
          isRefreshing: true,
          didInvaliate: false,
        }
      };
    }
    case REQUEST_COMPELTED:{
      let {
         payload: forumList,
         meta:{
           boardId
         }
       } = action;
      return{
          ...state,
          [boardId]:{
            ..._.get(state,boardId,defaultForumListState),
            isRefreshing: false,
            didInvaliate: false,
            list: forumList.list
          }
      };
    }
    case REQUEST_FAILED:{
      let  { boardId } = action.payload;
      return{
        ...state,
        [boardId]:{
          ..._.get(state,boardId,defaultForumListState),
          isRefreshing: false,
          didInvaliate: false
        }
      };
    }
    default:
      return state;
  }
};
