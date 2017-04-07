'use strict';
import { Navigator } from 'react-native';
import Home from '../components/home';

let _navigator = null;

export default class Router {
  constructor(navigator){
    _navigator=navigator;
  }

  isCurrentRoute(routeId){
    return routeId===this.getCurrentRoute().id;
  }
  getCurrentRoute(){
    let routeList=_navigator.getCurrentRoutes();
    let currentRoute=routeList[routeList.length-1];
    return currentRoute;
  }

  _navigateTo(route,isReplace,isForceReplace){
    if (isForceReplace) {
      _navigator.replace(route);
      return;
    }

    let currentRoute = getCurrentRoute();
    if (route.id!==currentRoute.id) {
        if (isReplace) {
          _navigator.replace(route);
          return;
        }
        _navigator.push(route);
    }
  }

  pop(){
    _navigator.pop();
  }

  toHome(isForceReplace){
    this._navigateTo({
      id: 'home',
      title: '首页',
      component: Home
    },true,isForceReplace);
  }
}
