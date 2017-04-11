'use strict';
import React, { Component } from 'react';
import {
  View ,
  Text
} from 'react-native';

import styles from '../styles/common';
import { fetchForumList } from '../actions/forumaction';


class Home extends Component {

  constructor(props){
    super(props);
    console.log(this.props);
    this.boardId='all';
  }

  componentDidMount(){
    console.log("====fetchForumList load=====");
    this.props.fetchTopicList({
      boardId: this.boardId,
      isEndReached: false,
      sortType: 'publish'
    });
  }

  render(){
    let {
      router,
      topicList
    } = this.props;

    return(
      <View style= {styles.container}>
          <Text style={styles.text}>Text</Text>
      </View>
    );
  }
}
module.exports = Home;
