const http = require('http');
const servet = http.createServer((req,res) =>{
    res.writeHead(200,{'content-type': 'text/html'});
    res.end('<h1> welcome to backend</h1>');
});

Server.listen(9000,(err)=>{
     if(err)
        console.log('error starting server',err);
    elseconsole.log("server startec onport 9000")
     
});