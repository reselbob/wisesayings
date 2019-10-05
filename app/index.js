/*
The purpose of this API is to provide a random saying such
as one that would be found in a fortune cookie.
 */

const http = require('http');

const port = process.env.SAYINGS_PORT || 3000;


function loadSayingsSync(){
    const arr= [];
    require('fs').readFileSync('sayings.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
        arr.push({saying:line});
    });
    console.log("Data initialized at : " + new Date());
    return arr;
}

const sayings = loadSayingsSync();

const getRandomSaying = () =>{
    max = sayings.length;
    min = 0;

    const idx =  Math.floor(Math.random()*(max-min+1)+min);
    return sayings[idx];
};

const handleRequest = function(request, response) {

    const obj = getRandomSaying();
    obj.date = new Date()
    const str = JSON.stringify(obj, null, 4);
    response.setHeader('content-type', 'application/json');
    response.writeHead(200);
    response.end(str);
    console.log(str);
};

const server = http.createServer(handleRequest);
server.listen(port, ()=>{
    console.log(`Listening on port ${port}, started at : ${new Date()}`);
});

const shutdown = () => {
    console.log(`Wisesayings server shutting down at ${new Date()}`);
    server.close()
};

module.exports = {server, getRandomSaying, shutdown};