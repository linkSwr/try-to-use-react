import React, { Component } from 'react';
import List from './list';
import Count from './components/addButton';

require('../style/style.less')

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

// export default class App extends Component {
//   render() {
//     return (
//       <h1>423</h1>
//     );
//   }
// }
module.exports = React.createClass({
  render: function () {
    return (
      <div className="productBox">
      	<List/>
        Hello World! From Swr
        <Count />
      </div>
    );
  }
});