'use strict';

import React, { Component } from 'react';
import {
  View
} from 'react-native';

import MenuItem from '../views/menuitem';
import menus from '../constants';
import styles from '../styles/menu';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLoginModalOpen: false
    };
  }

  render(){
    return(
      <View style={styles.container}>
          <MenuItem
            menu= {menus['home']}
            {...this.props}/>
          <MenuItem
            menu= {menus['forumList']}
            {...this.props}/>
          <MenuItem
            menu= {menus['about']}
            {...this.props}/>
      </View>
    );
  }
}
