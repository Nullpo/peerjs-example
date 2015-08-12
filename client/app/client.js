App = window.App || {};

App.loadClient = function loadClient(Connection){
  Connection.initAndConnect(QueryString.hostId, function load(){
    console.log('Client: Connection opened!');
    $('#event1, #event2, #event3').show();
  });
  
  E.vents({
    'click #event1': function(){
      Connection.send('1');
    },
    'click #event2': function(){
      Connection.send('2');
    },
    'click #event3': function(){
      Connection.send('3');
    }
  });
}