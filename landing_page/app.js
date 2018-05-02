const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log('client request URL: ', req.url);

    readWriteServe = (filepath) => {
        fs.readFile(filepath, 'utf8', (err, content) => {
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(content);
            res.end();
        });
    }

    if (req.url === "/") {
        readWriteServe('index.html');
    }
    else if (req.url === "/ninjas") {
        readWriteServe('ninjas.html');
    }
    else if (req.url === "/dojos/new") {
        readWriteServe('dojos.html');
    }
    else {
        res.end('Error 404: File Not Found');
    }
})

server.listen(6789);
console.log("Running on localhost at port 6789");