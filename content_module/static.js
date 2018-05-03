
function static_contents(req, res) {
    const http = require('http');
    const fs = require('fs');
    const stylesRegex = /\/stylesheets\/.+/;
    const viewsRegex = /\/.+\.html+/;
    const imgRegex = /\/images\/.+/;


    readWriteServe = (filepath, contentType) => {
        if (!contentType.match(/image\/.+/)) {
            fs.readFile(filepath, 'utf8', (err, content) => {
                if (err) {throw err}
                else {
                    res.writeHead(200, {'content-type': contentType});
                    res.write(content);
                    res.end();
                }
            });
        }
        else {
            fs.readFile(filepath, (err, content) => {
                if (err) {console.log("Missing Image")}
                else {
                    res.writeHead(200, {'content-type': contentType});
                    res.write(content);
                    res.end();
                };
            });
        };
    };

    if (req.url.match(viewsRegex)) {
        readWriteServe("./views"+req.url, 'text/html');
    }
    else if (req.url.match(stylesRegex)) {
        readWriteServe("."+req.url, 'text/css');
    }
    else if (req.url.match(imgRegex)) {
        // Looking for filetype match in url
        const findMatch = req.url.match(/.+\.[a-zA-Z]{3,4}/);
        if (findMatch) {
            // remove period from filetype and append it to contentType argument
            fileType = findMatch[0].slice(1, findMatch[0].length-1)
            readWriteServe("."+req.url, `image/${fileType}`)
        }
    }
    else {
        res.end('Error 404: File Not Found');
    };
};

module.exports = static_contents;