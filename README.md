# node-download
Download module for NodeJS

Provides a quick way to download stuff from the internet and shows progress.

```node

var download = require('../node-download')

download('http://nodejs.org/api/all.json') // saves all.json to cwd

download('http://nodejs.org/api/all.json', 'all-2015.json') // saves all-2015.json to cwd

```

