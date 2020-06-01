# pretendre

A lightweight package to send POST and GET requests easy and fast.


Example:
```js
const pretendre = require("pretendre");

// To send a get request ->
const GETresponse = pretendre.makeRequest.get("https://pretendre.is-online.me");
const GETbody = GETresponse.body;
// You can also console log the response to see what's inside on it.

// To send a post request ->
const POSTresponse = pretendre.makeRequest.post("https://pretendre.is-online.me");
const POSTbody = POSTresponse.body;
```

For any problem, create a request on Github, click (here)[https://github.com/snowy1000/pretendre] (just to clarify, using Github is a better way), or join our Discord server by clicking (here)[https://discord.gg/JajWkmj].
