  var client;
//  var mqtt = require('mqtt');
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt") // connect to broker


  client.subscribe({
    'preAnn/temp': {qos:0},
    'alobar/temperature' : {qos:0},
    'amabel':{qos:0},
    'rosedaine':{qos:0},
    'pasores/temperature':{qos:0},
    'sample':{qos:0},
    'renzyclaire':{qos:0},
    'Luz-Ian/Temp':{qos:0},
    'louie/cindy/temp':{qos:0},
    'diansin/gabatan/temp':{qos:0},
    'MaryAira':{qos:0},
    'tychu/temp':{qos:0}
  })
  client.on("message", function (topic,payload) {
    console.log("Received {topic: " + topic+" ; Payload"+ payload+"}");

    if(topic == 'preAnn/temp') 
    {
      // document.getElementById('preAnn');
      document.getElementById('preAnn').value = payload;
    }
    if(topic == 'alobar/temperature') 
    {
      // document.getElementById('alonzobarlas');
      document.getElementById('alonzobarlas').value = payload;
    }
    if(topic == 'rosedaine') 
    {
      document.getElementById('rosedaine').value = payload;
    }
    if(topic == 'pasores/temperature') 
    {
      document.getElementById('pasores').value = payload;
    }
    if(topic == 'sample') 
    {
      document.getElementById('sample').value = payload;
    }
    if(topic == 'rezyclaire') 
    {
      document.getElementById('renzyclaire').value = payload;
    }
    if(topic == 'Luz-Ian/Temp') 
    {
      document.getElementById('luzIan').value = payload;
    }
    if(topic == 'louie/cindy/temp') 
    {
      document.getElementById('loudy').value = payload;
    }
    if(topic == 'diansin/gabatan/temp') 
    {
      document.getElementById('annasin').value = payload;
    }
    if(topic == 'MaryAira') 
    {
      document.getElementById('maryaira').value = payload;
    }
    if(topic == 'tychu/temp') 
    {
      document.getElementById('tychu').value = payload;
    }
    
    
    


    
  });




