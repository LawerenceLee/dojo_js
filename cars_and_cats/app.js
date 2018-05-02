const http = require('http');
const fs = require('fs');
const imgRegex = /\/images\/.+\.jpg/;


const server = http.createServer((req, res) => {
    console.log('client request URL: ', req.url);

    readWriteServe = (filepath, contentType) => {
        fs.readFile(filepath, 'utf8', (err, content) => {
            if (err) {
                // res.end('Error 404: File Not Found');
                throw err;
            }
            else {
                res.writeHead(200, {'content-type': contentType});
                res.write(content);
                res.end();
            }
        });
    }


    if (req.url === "/cars") {
        readWriteServe('./views/cars.html', 'text/html');
    }
    else if (req.url === "/cars/new") {
        readWriteServe('./views/newCar.html', 'text/html');
    }
    else if (req.url === "/cats") {
        readWriteServe('./views/cats.html', 'text/html');
    }
    else if (req.url === "/stylesheets/styles.css") {
        readWriteServe("./stylesheets/styles.css", 'text/css');
    }
    else if (req.url.match(imgRegex)) {
        console.log(req.url)
        fs.readFile("."+req.url, (err, content) => {
            if (err) {throw err}
            else {
                res.writeHead(200, {'content-type': "image/jpg"});
                res.write(content);
                res.end();
            }
        })
    }
    else {
        res.end('Error 404: File Not Found');
    }
})

const portNum = 7077
server.listen(portNum);
console.log(`Running on localhost at port ${portNum}`);