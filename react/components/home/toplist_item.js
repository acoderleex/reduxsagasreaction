'use strict';
import React, {Component} from 'react';
import {View, Text, TouchableHighlight,Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/zh-cn';

import styles from '../../styles/topic_item';
import colors from '../../styles/colors';

class TopicItem extends Component {
    render() {
        let {
            title,
            hits,
            replies,
            board_name,
            user_nick_name,
            last_reply_date,
            userAvatar
        } = this.props.topic;

        last_reply_date = moment(+ last_reply_date).startOf('minute').fromNow();
        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor={colors.underlay} onPress={() => this.pressAction()}>
                    <View style={styles.item}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.info}>
                            {board_name && <View style={styles.forumInfo}>
                                <Text style={styles.forumName}>{board_name}</Text>
                            </View>
}
                            <View style={styles.details}>
                                <Icon style={styles.viewsInfo} name='eye'>
                                    {hits}
                                </Icon>
                                <Icon style={styles.commentsInfo} name='comments'>
                                    {replies}
                                </Icon>
                            </View>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.date}>{last_reply_date}</Text>
                            <Text style={styles.name}>{user_nick_name}</Text>
                            {userAvatar && <Image style={styles.avatar} source={{
                                uri: userAvatar
                            }}/>}
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    pressAction(){
      alert('Test');
    }
}
module.exports = TopicItem;
