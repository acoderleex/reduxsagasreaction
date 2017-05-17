'use strict';
import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../styles/menu';
import MenuItem from '../views/menuitem';
import menus from '../constants/index';

class Menu extends Component {
    constructor(passProps) {
        super(passProps);
        this.state = {
            isLoginModalOpen: false
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <MenuItem menu={menus['home']} {...this.props}/>
                <MenuItem menu={menus['forumList']} {...this.props}/>
                <MenuItem menu={menus['about']} {...this.props}/>
            </View>
        );
    }
}
module.exports = Menu;
