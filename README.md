# pretendre

A lightweight package to send POST and GET requests easy and fast.


Example:
```js
const pretendre = require("pretendre");

// To send a GET request ->
pretendre.makeRequest.get("https://ptsv2.com/t/8unj2-1592899008#/")
    .then((res) => {
        let body = res.body;
        // do something
    })
    .catch((err) => {
        // handle error
    });

// To send a POST request ->
pretendre.makeRequest.post("https://ptsv2.com/t/8unj2-1592899008/post")
    .then((res) => {
        let body = res.body;
        // do something
    })
    .catch((err) => {
        // handle error
    });
```

For any problem, create a request on Github, click [here](https://github.com/snowy1000/pretendre) (just to clarify, using Github is a better way), or join our Discord server by clicking [here](https://discord.gg/JajWkmj).
