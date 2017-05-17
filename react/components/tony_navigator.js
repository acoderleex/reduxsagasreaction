'use strict';
import React, {Component} from 'react';
import {View, Navigator} from 'react-native';


import SideMenu from 'react-native-side-menu';
import Menu from '../views/menu';
import Router from '../routers';
import Home from './home';

class TonyNavigator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {
        let menu = <Menu selectMenuItem={(item, isForceReplace) => this._onMenuItemSelected(item, isForceReplace)} isCurrentRoute={(route) => this._isCurrentRoute(route)}/>;
        return (
            <SideMenu menu={menu} disableGuestures={true} isOpen={this.state.isOpen}>
                <Navigator ref='navigator' configureScene={this.configureScene} renderScene={this.renderScene.bind(this)} initialRoute={{
                      id: 'home',
                      title: '首页',
                      component: Home
                }}/>
            </SideMenu>
        );

    }

    _updateMenuState(isOpen) {
        this.setState({isOpen});
    }

    configureScene(route) {
        if (route.sceneConfig) {
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    }

    _onMenuItemSelected(item, isForceReplace) {
        this._updateMenuState(false);
        this.router[item.actionName](isForceReplace);
    }

    _isCurrentRoute(route) {
        return this.router && this.router.isCurrentRoute(route.id);
    }

    renderScene(route, navigator) {
        if (!this.router) {
            this.router = new Router(navigator);
        }
        return <route.component router={this.router} updateMenuState={isOpen => this._updateMenuState(isOpen)} passProps={route.passProps}/>
    }
}
module.exports = TonyNavigator;
