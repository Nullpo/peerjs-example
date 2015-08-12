var path = require('path');
var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");

app.use('/api', ExpressPeerServer(server, {}));
app.use(express.static(path.resolve(__dirname, 'client')));


server.on('connection', function (id) {
  console.log("Nueva conexion! ", id);
});

