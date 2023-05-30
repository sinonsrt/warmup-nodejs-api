const http = require('http');

const port = 3000;
const routes = {
  '/': 'Node Course',
  '/book': 'Books Page',
  '/author': "Author's page",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text-plain' });
  res.end(routes[req.url]);
});

server.listen(port, () => console.log('Server up 🚀'));
