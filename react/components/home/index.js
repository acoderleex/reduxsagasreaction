'use strict';
import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

import {fetchTopList} from '../../actions/topListAction';
import Header from '../../views/header';
import styles from '../../styles/home';
import TopicList from './toplist';

class Home extends Component {
    constructor(props) {
        super(props);
        this.boardId = 'all';
    }

    componentDidMount() {
        this.props.fetchTopList({boardId: this.boardId, isEndReached: false, sortType: 'publish'});
    }

    render() {
        let {router, topList} = this.props;
        let realTopicList = [];
        let dad = _.get(this.props.topList, [
            this.boardId, 'publish'
        ], {});
        if (dad.list) {
            console.log("=====d==dd=d=d=d=d===" + dad.list.length);
        } else {
            console.log("=====d==dd=d=d=d=d===");
        }
        return (
            <View style={styles.container}>
                <Header title='首页' updateMenuState={isOpen => this.props.updateMenuState(isOpen)}/>
                  <TopicList topicList={_.get(topList, [
                    this.boardId, 'publish'
                ], {})}/>
                <Text style={{
                    fontSize: 12,
                    color: '#345678'
                }}>Textsss</Text>
            </View>
        );
    }
}

function mapStateToProps({topList}) {
    return {topList};
}

export default connect(mapStateToProps, {fetchTopList})(Home);
