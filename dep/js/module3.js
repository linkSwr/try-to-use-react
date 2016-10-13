import module2 from './module2'

module.exports = () => {
	module2();
	console.log('Module third load!');
}