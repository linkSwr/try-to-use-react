// const module_2 = require('./module2.js')
// import * as moudle_2 from './module2';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './appContainer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import Immutable from 'immutable';

// const module_1 = require('./module1.js');
// const module_3 = require('./module3.js');


// 测试Immutable
// debugger;
let map1 = Immutable.Map({a:1, b:2, c:3});
console.log(map1.toObject());
map1.set('b', 50);
console.log(map1.toObject());

// let entry = (opts) => {
//  console.log('entry run1!');
//  module_1();
//  module_3();
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    // debugger;
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    document.getElementById('app-container')
);

// }

// window.entry = entry;
// entry();

// module.exports = entry;

if (module.hot && module.hot.accept) {
  module.hot.accept('./appContainer', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    let appContainer = require('./appContainer');
    const NextApp = appContainer.default || appContainer;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
         <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('app-container')
    );
  });
}