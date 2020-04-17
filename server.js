const mqtt = require("mqtt");

// Give Your System IP 
// Todo : Move to env file
const client = mqtt.connect("mqtt://192.168.1.4", {
  port:  1883,
});

client.on("connect", function () {
  console.log(
    "Consumer connecting on [Port]: " + 1883 );
  client.subscribe("email", {
    qos: 2,
  });
  client.on("message", function (topic, message) {
    console.log(`Message Topic ${topic}`);
    let data = message.toString();
    console.log(data);
    try {
      //notification.sendEmail(data);
    } catch (err) {
      console.log(err);
    }
  });
});
