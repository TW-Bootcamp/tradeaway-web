var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('index.json');
var authorizationResponse = require('./data/auth.json');
var PORT = 3000;
server.use(jsonServer.defaults());

server.use(jsonServer.rewriter({
  '/api/': '/'
}));

server.post('*/auth', function (req, res) {
   res.send(authorizationResponse);
 });

server.post('*/users/register', function (req, res) {
  res.send({});
});

server.use(router);

server.listen(PORT, function () {
  console.log('JSON Server is running')
});