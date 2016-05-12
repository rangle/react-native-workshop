import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../store/configureStore';
import Navigator from './Navigator';

const store = createStore();

const Root = () => {
  return (
    <Provider store={ store }>
      <Navigator />
    </Provider>
  );
};

export default Root;
