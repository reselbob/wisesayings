
const http = require('http');
const rp = require('request-promise');


const port = process.env.SERVICE_PORT || 3034;

const sayingsPort = process.env.SAYINGS_PORT || 3000;



const handleRequest = function(req, res) {
    let str;
    rp(`http://localhost:${sayingsPort}`)
        .then((obj) => {
            str = JSON.stringify(obj, null, 4);
            res.writeHead(200);
            res.end(str);
            console.log({response:str,date:new Date()});
        })
        .catch((err) => {
            str = JSON.stringify(err, null, 4);
            res.writeHead(500);
            res.end(str);
            console.log({response:str,date:new Date()});
        });


};

const server = http.createServer(handleRequest);
server.listen(port, ()=>{
    console.log(`Saying port is ${sayingsPort}, started at : ${new Date()}`);
});