App = window.App || {};

                                //Configuration for cloud9
App.url       = 'localhost';    //'peer-nullpo-1.c9.io';
App.port      = 3000;           //443;
App.resource  = '/api';
App.isSsl     = false;          //true;

$(document).ready(function start(){
  var url         = App.url,
      port        = App.port,
      resource    = App.resource,
      isSsl       = App.isSsl,
      Connection  = Service(url, port, resource, isSsl);
        
  if(QueryString.hostId){
    App.loadClient(Connection);
  } else {
    App.loadHost(Connection);
  }
});