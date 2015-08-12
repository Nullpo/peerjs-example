E = (function(){
  function parseLine(line){
    var regex = line.match(/^(\w+)\s(.+)$/);
    return {
      event: regex[1],
      selectors: regex[2]
    }
  }

  function eventier(selector){
    return {
      events: function addEvents(json){ // The format of keys is:<event> <selectors>
        var lineParsed, selectors, listener;
        for(var key in json) {
          lineParsed  = parseLine(key);
          selectors   = lineParsed.selectors;
          event       = lineParsed.event;
          listener    = json[key];
          $(selector || "body")
            .find(selectors)
            .on(event,listener.bind($(selectors)));
        }
      }
    }
  }

  eventier.vents = eventier().events;

  return eventier;
})();