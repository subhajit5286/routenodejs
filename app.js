var url=require('url')
module.exports = {
handleRequest: function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    var path= url.parse(req.url).pathname;
    switch(path){
        case '/home':
            res.write('Welcome home')
            res.end()
            break;
        case '/about':
            res.write('Welcome to About Us page')
            res.end()
            break;
        case '/node':
            res.write('Welcome to my Node Js project')
            res.end()
            break;
        default :
            res.writeHead(404)
            res.write('Route not found')
            res.end()
    }
}
}