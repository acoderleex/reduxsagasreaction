'use strict';
import React, {Component} from 'react';
import {View, Text} from 'react-native';

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
        return (
            <View style={{
                flex: 1
            }}>
                <Text style={{
                    fontSize: 10,
                    color: "#345"
                }}>Textssssssss</Text>
            </View>
        );
    }
}

module.exports = TopicList;
