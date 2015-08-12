var Service = (function(host, port, path, isSsl){
  var peer, conn;
  
  return {
    'init': function initialize(callback){
      peer = new Peer(null, {host: host, port: port, path: path, secure:isSsl})
      peer.on('open', function(id){
        callback(id, peer);
      });
    },
    'initAndConnect': function initAndConnect(hostId, callback){
      console.log("InitAndConnect")
      this.init(function(id){
        console.log("Peer opened")
        this.connect(hostId, callback);
      }.bind(this));
    },
    'createHost': function createHost(){
      peer.on('connection', function(conn) {
        console.log("Host: Connected!");
        return conn;
      });
    },
    'connect': function connectToHost(hostId, callback){
      conn = peer.connect(hostId);
      callback(conn);
    },
    'connection': function getConnection(){
      return conn;
    },
    'peer': function getPeer(){
      return peer;
    },
    'send': function send(data){
      conn.send(data);
    }
  }
});