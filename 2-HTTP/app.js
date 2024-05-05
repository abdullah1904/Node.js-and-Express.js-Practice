const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./index.html');
const homeStyle = readFileSync("./style.css");
const homeScript = readFileSync('./script.js');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(homePage);
        res.end();
    }
    else if (url === '/about') {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>About Page</h1>");
        res.end();
    }
    else if (url === '/style.css') {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(homeStyle);
        res.end();
    }
    else if (url === '/script.js') {
        res.writeHead(200, { "content-type": "text/javascript" });
        res.write(homeScript);
        res.end();
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1>Not Found</h1>");
        res.end();
    }

}).listen(8080);