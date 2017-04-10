'use strict';
import React, { Component } from 'react';
import {
  View ,
  Text
} from 'react-native';

import styles from '../styles/common';

class Home extends Component {
  render(){
    return(
      <View style= {styles.container}>
          <Text style={styles.text}>Text</Text>
      </View>
    );
  }
}
module.exports = Home;
