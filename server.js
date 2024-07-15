const http  = require("http");
const port = 8081;

http.createServer((request,response)=>{
   response.writeHead(200,{"content-type":"text/html"});
   response.write("<h1>Hello World Hello</h1>");
   response.end();
})
.listen(port, function () {
        console.log("The Server is running succesfully");
    })