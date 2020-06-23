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
        try {
            method.get(url, res => {
                let body = "";

                res.on("data", (chunk) => {
                    body += chunk;
                }).on("end", () => {
                    res.body = body;
                    resolve(res);
                });
            });
        } catch (error) {
            reject(error);
        };
    });
};