// const Person = require('./person');

// const person1 = new Person('john deo', 11);

// person1.greeting();


// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log(`Called Listener`, data));

// logger.log('hello world');

const http = require('http');
const path = require('path');
const fs = require('fs');
const { ENXIO } = require('constants');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // if(req.url ==='/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), 
    //         (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type' : 'text/html'});
    //         res.end(content);
    //         }
    //     );        
    // }
    // if(req.url ==='/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), 
    //         (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type' : 'text/html'});
    //         res.end(content);
    //         }
    //     );        
    // }

    // if(req.url ==='/api/users') {
    //     const users = [
    //         { name : 'Bob Smith', age: 40},
    //         { name : 'John Doe', age:30 }
    //     ];
    //     res.writeHead(200, {'Content-Type' : 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    //build file path

    let filePath = path.join(__dirname, 'public', req.url === '/' ?
    'index.html' : req.url);
    
    // console.log(filePath);
    // res.end()

    // extension of file
    let extname = path.extname(filePath);

    //initial content type
    let contentType = 'text/html';

    //check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code =='ENOENT') {
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'),
                (err, content) => {
                    res.writeHead(200, { 'Content-Type' : 'text/html'});
                    res.end(content, 'utf8');
                })
            } else {
                //some server error
                res.writeHead(500);
                res.end(`server error : ${err.code}`);
            }
        }else {
            //success
            res.writeHead(200, {'Content-Type' : contentType});            
            res.end(content, 'utf8')
        }
    });
});
const PORT = process.env.PORT || 5000;


server.listen(PORT, () => console.log(`server running on port ${PORT}`));
