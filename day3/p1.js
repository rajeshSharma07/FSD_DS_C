//making bakend server
const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    if(req.url ==='/home'){
        res.end('<h1>welcome to home page</h1>');

    }
    else if(req.url ==='/about'){
        res.end('<h1>welcome to about page</h1>');
    }else{
        res.end('<h1>page not found</h1>');
    }
});

server.listen(9000,(err)=>{
    if(err)
        console.log("error starting server",err);
    else
    console.log("server starting on port 9000");

    
});