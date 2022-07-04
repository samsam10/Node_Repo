const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
       res.end(`This is the home page`); 
       return;
    }

    if(req.url === '/about'){
      res.end('this is the about page');
      return;
    }

    res.end(`
    <h1>OOPSS!!!</h1>
    <p>we can't find the page you are looking for</p>
    <a href="/">Go Back Home</a>
   `)


})

server.listen(5000)