'use strict';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux';
import styles from '../styles/common';
import {fetchTopicList} from '../actions/fetchTopicList';
import TopicList from './topiclist';

class Home extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.boardId = 'all';
    }

    componentDidMount() {
        this.props.fetchTopicList({boardId: this.boardId, isEndReached: false, sortType: 'publish'});
    }

    render() {
        console.log("====fetchForumList render=====");
        let {router, topicList} = this.props;
        return (
          <View style={{flex:1}}>
            <TopicList topicList={_.get(topicList, [
                this.boardId, 'publish'
            ], {})}/>
          </View>
        );
    }
}

function mapStateToProps({topicList}) {
    return {topicList};
}
export default connect(mapStateToProps, {fetchTopicList})(Home);
