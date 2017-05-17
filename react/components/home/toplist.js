'use strict';
import React, {Component} from 'react';
import {ListView} from 'react-native';
import TopicItem from './toplist_item';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

class TopicList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {topicList, isSearch} = this.props;
        let realTopicList = [];
        let isRefreshing = false;
        if (topicList.list) {
            realTopicList = topicList.list;
            isRefreshing = topicList.isRefreshing;
            console.log('====topicList======' + realTopicList.length);
        } else {
            console.log('====topicList==null====' + realTopicList.length);
        }

        let source = ds.cloneWithRows(realTopicList);

        return (
            <ListView ref={component => this.topicList = component} dataSource={source} enableEmptySections={true} renderRow={topic => {
                return (<TopicItem key={topic.topic_id} topic={topic} router={this.props.router}/>);
            }}/>
        );
    }
}

module.exports = TopicList;
