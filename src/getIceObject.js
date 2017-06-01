const $ = require('jquery');
function getIceObject(callback){
  $.ajax({
    url: "https://service.xirsys.com/ice",
    data: {
      ident: "namzee",
      secret: "35984c88-46ce-11e7-814b-df75e80401d4",
      domain: "namzee2013.github.io",
      application: "default",
      room: "default",
      secure: 1
    },
    success: function (data, status) {
      // data.d is where the iceServers object lives
      callback(data.d);
    }
  });
}
module.exports = getIceObject;
