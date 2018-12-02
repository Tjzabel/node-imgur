var http = require("https");

var IMGUR_CLIENT_ID = '';
var tgUrl = 'https://raw.githubusercontent.com/RITlug/TigerOS/devel/screenshots/tigeros_before.png';

var options = {
  "method": "POST",
  "host": "api.imgur.com",
  "port": 443,
  "path": "/3/image",
  "headers": {
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
    "Authorization": "Client-ID " + IMGUR_CLIENT_ID
  },
  "name": "Test Image"
};

var req = http.request(options, function (res) {
  console.log(res.statusCode);
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"image\"\r\n\r\n" + tgUrl + "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
req.end();
