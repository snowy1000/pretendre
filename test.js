const pretendre = require(".");
 
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