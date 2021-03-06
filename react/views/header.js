'use strict';
import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from '../styles/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MenuButton} from './button';
class Header extends Component {
    render() {
        let leftTopButton = null;
        let rightTopButton = null;
        const buttons = this.props.children;
        const count = React.Children.count(buttons);
        switch (count) {
            case 0:
                leftTopButton = <MenuButton updateMenuState={isOpen => this.props.updateMenuState(isOpen)} style={styles.left}/>;
                break;
            case 1:
                leftTopButton = React.cloneElement(buttons, {
                    style: [styles.left, buttons.props.style]
                });
                break;
        }

        return (
            <View style={[styles.container, this.props.style]}>
                {leftTopButton}
                <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
                {rightTopButton || <Text style={styles.right}></Text>}  
            </View>
        );
    }
}

module.exports = Header;
