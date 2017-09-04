var express = require('express')
var app = express()

// var webtorrent = require('webtorrent');
// var webtorrent = require('webtorrent-hybrid');

var WebTorrent = require('webtorrent')

app.get('/', function (req, res) {
  	res.render('index.ejs', {
        WebTorrent : WebTorrent
    });
})

// app.post('/', function (req, res) {
// 	var client = new WebTorrent()
// 	var magnetURI = 'magnet:?xt=urn:btih:a6cd140e1c329190e634577011a47ec9d1b1e019&dn=Just_A_Movie&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopentor.org%3A2710&tr=udp%3A%2F%2Ftracker.ccc.de%3A80&tr=udp%3A%2F%2Ftracker.blackunicorn.xyz%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969'
	 
// 	client.add(magnetURI, function (torrent) {
// 	  // Got torrent metadata! 
// 	  console.log('Client is downloading:', torrent.infoHash)
	 
// 	  torrent.files.forEach(function (file) {
// 	    // Display the file by appending it to the DOM. Supports video, audio, images, and 
// 	    // more. Specify a container element (CSS selector or reference to DOM node). 
// 	    file.appendTo('body')
// 	  })
// 	})
// })

app.listen(3000)