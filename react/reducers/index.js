'use strict';
import { combineReducers } from 'redux';
import forumList from './forumList';
import topicList from './topicList';

export default combineReducers({
  forumList,
  topicList,
});
