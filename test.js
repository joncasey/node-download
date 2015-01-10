
var download = require('../node-download')

download('http://nodejs.org/api/all.json') // saves all.json to cwd

download('http://nodejs.org/api/all.json', 'all-2015.json') // saves all-2015.json to cwd

