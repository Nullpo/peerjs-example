App = window.App || {};

App.loadHost = function loadHost(Connection){
  var self = this;
  Connection.init(function load(id, peer){
    var realUrl = 'http://' + self.url + '/?hostId=' + id,
        srcUrl  = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + realUrl,
        events  = {
          'click #beHost': function startHost() {
            $('#link')  .attr('href', realUrl);
            $('#qrlink').attr('src', srcUrl);
            $('#qrlink').attr('title', realUrl);
            
            peer.on('connection', function(conn) {
              console.log('Host: Connected!');
              conn.on('data', function(data){
                  console.log('Host: On data!');
                  $('#val').text('Botón ' + data);
              });
            });
          }
        };
    
    E.vents(events);
  });
}