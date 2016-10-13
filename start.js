const webpack = require('webpack');
const config = require('./webpack.config');
// const execFile = require('child_process').execFile;
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

try {
    config.plugins.push(commonsPlugin);
    webpack(config);
    console.log(23)
}
catch(e) {
    console.log(e);
}
// execFile('./node_modules/.bin/webpack', ['./webpack.config.js'], (error, stdout, stderr) => {
//     if (error) {
//         throw error;
//     }
//     console.log(stdout);
// })

