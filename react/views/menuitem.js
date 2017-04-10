'use strict';
import React , { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/menuitem';
import colors from '../styles/color';
export default class MenuItem extends Component {
    render(){
        let { menu, rooter, isCurrentRoute } = this.props;
        let { title, icon, iconSize, actionName } = menu;
        return(
          <TouchableHighlight underlayColor={colors.underlay}
            onPress={()=>this.props.selectMenuItem(menu)}>
            <View style={[styles.row, isCurrentRoute(menu)&&styles.selectedRow]}>
                <Icon style={[styles.icon,isCurrentRoute(menu)&&styles.selectMenuItem]} name={icon} size={+iconSize||20}/>
                <Text style={[styles.item,isCurrentRoute(menu)&&styles.selectMenuItem]}>{title}</Text>
            </View>
          </TouchableHighlight>
        );
    }
}
