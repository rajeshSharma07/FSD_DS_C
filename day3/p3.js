const http = require('http');
let users =[];

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if(req.url==='/getdata'&& req.method ==='GET'){
        res.end(JSON.stringify(users));
    }

     else if (req.url === '/setdata' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            let data = JSON.parse(body);
            console.log(data);
            users.push(data);
            res.end(JSON.stringify({ message: 'Data received' }));
        });
    } else {
        res.end(JSON.stringify({ message: 'Invalid route' }));
    }
});

server.listen(9001, (err) => {
    if (err) console.log("Error starting server", err);
    else console.log("Server started on port 9001");
});
