
const colors = require('colors');

/*

const http = require('http');


// peticion - respuesta

const handleServer = function(req, res){
    // codigo - objeto con mas informacion
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}

const server = http.createServer(handleServer)

server.listen(3000, function () {
    console.log('Server on port 3000'.yellow)
})// puerto

*/

const express = require('express')

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hola Mundo con Express y Nodejs</h1>')
})

server.listen(3000, () => {
    console.log('Server on port 3000'.red)
})