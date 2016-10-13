const module_1 = require('./module1.js')
// const module_2 = require('./module2.js')

import moudle_2 from './module2';
import React from 'React';
import app from './appContainer';


let entry = (...opts) => {
	console.log('entry1 run!');
	console.log('entry1 arguments', opts)
	module_1();
	module_2();
	React.render(<app />, document.getElementById('app-container'));
}

window.entry = entry;
// entry();

module.exports = entry;