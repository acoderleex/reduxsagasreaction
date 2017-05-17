'use strict';
import {combineReducers} from 'redux';
import forumList from './forumList';
import topicList from './topicList';
import topList from './topList';

export default combineReducers({forumList, topicList,topList});
