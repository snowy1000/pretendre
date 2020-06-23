const protocols = {
    https: require("https"),
    http: require("http")
}

module.exports = function (link, path) {
    if (!link.startsWith("http")) throw new TypeError("Your link must start with http");

    let url = "";
    if (path) url = new URL(path, link);
    else url = new URL(link);

    let protocol = url.protocol.substring(0, url.protocol.length - 1);
    let method = protocols[protocol];

    return new Promise((resolve, reject) => {
        const REQEST_OPTIONS = {
            host: url.host,
            port: protocol == "https" ? 443 : 80,
            path: url.pathname,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }

        method.request(REQEST_OPTIONS, res => {
                let body = "";

                res.setEncoding("utf8");

                res.on("data", function (chunk) {
                  body += chunk;
                }).on("end", () => {
                    res.body = body;
                    resolve(res);
                })
        }).on("error", error => reject(error)).end();
    });
}