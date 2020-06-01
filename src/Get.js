const https = require("https");
const http = require("http");
module.exports = function (link, path) {
    if (!link.startsWith("http")) throw new TypeError("Your link must start with http");
    let url = "";
    if (path) {
        url = new URL(path, link);
    } else {
        url = new URL(link);
    };
    return new Promise((resolve, reject) => {
        try {
            if (url.href.startsWith("https")) {
                https.get(url, response => {
                    let body = "";
                    response.on("data", function (chunk) {
                        body += chunk;
                    });
                    response.on("end", function () {
                        response.body = body;
                        resolve(response);
                    });
                })
            } else {
                http.get(url, response => {
                    let body = "";
                    response.on("data", function (chunk) {
                        body += chunk;
                    });
                    response.on("end", function () {
                        response.body = body;
                        resolve(response);
                    });
                });
            }
        } catch (error) {
            reject(error);
        };
    });
};