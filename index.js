
var fs = require('fs')
var http = require('http')
var url = require('url')

module.exports = function download(from, to) {

  var file = fs.createWriteStream(to ||
    url.parse(from).pathname.split('/').pop()
  )

  http.get(from, function (res) {

    var total = parseFloat(res.headers['content-length'])
    var received = 0

    res.on('data', function (chunk) {
      received += chunk.length

      console.log({
        'percent': (received / total * 100).toFixed(2) + '%',
        'received': received,
        'total': total,
      //'file': file.bytesWritten
      })

      file.write(chunk)
    })

    res.on('end', function () {
      file.end()
      console.log('end')
    })

  }).on('error', function (err) {
    console.error(err)
  })

}

