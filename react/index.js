'use strict';
import React, { Component}  from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import rootSaga from './sagas';
import Navigator from './navigator';

const store = configureStore();
store.runSaga(rootSaga);

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}
