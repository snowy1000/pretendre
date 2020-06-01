const http = require("http");
const https = require("https");
module.exports = function (link, path) {
    if (!link.startsWith("http")) throw new TypeError("Your link must start with http");
    let url = "";
    if (path) {
        url = new URL(path, link);
    } else {
        url = new URL(link);
    };
    return new Promise((resolve, reject) => {
        if (url.href.startsWith("https")) {
            const HTTPSRequestOptions = {
                host: url.host,
                port: 443,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            https.request(HTTPSRequestOptions, response => {
                let body = "";
                response.setEncoding("utf8");
                response.on("data", function (chunk) {
                  body += chunk;
                });
                response.on("end", () => {
                    response.body = body;
                    resolve(response);
                })
            }).on("error", error => reject(error)).end();
        } else {
            const HTTPRequestOptions = {
                host: url.host,
                port: 80,
                path: url.pathname,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            http.request(HTTPRequestOptions, response => {
                let body = "";
                response.setEncoding("utf8");
                response.on("data", function (chunk) {
                  body += chunk;
                });
                response.on("end", () => {
                    response.body = body;
                    resolve(response);
                })
            }).on("error", error => reject(error)).end();
        }
    })
}