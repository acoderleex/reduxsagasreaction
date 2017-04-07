/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import 'es6-symbol/implement';// make `Symbol` available on iOS 8
import {
  AppRegistry,
} from 'react-native';

import App from './react';

AppRegistry.registerComponent('TonyReduxSagas', () => App);
