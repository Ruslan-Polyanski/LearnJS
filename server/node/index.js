const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000;

const createPath = (page) => {
  return path.resolve(__dirname, 'frontend', `${page}.html`);
}

const server = http.createServer((request, response) => {
  response.setHeader('Content-type', 'text/html')

  let bathPath = '';

  switch(request.url) {
    case '/': 
    case '/index.html':
      bathPath = createPath('index');
      response.statusCode = 200;
      break;
    case '/we':
      response.statusCode = 301;
      response.setHeader('Location', '/contacts');
      response.end();
      break;
    case '/contacts': 
      bathPath = createPath('contacts');
      response.statusCode = 200;
      break;
    default:
      bathPath = createPath('error');
      response.statusCode = 404;
      break;
  }

  fs.readFile(bathPath, (err, data) => {
    if(err) {
      console.log(err)
      response.statusCode = 500;
      response.end()
    } else {
      response.write(data)
      response.end()
    }
  })


})

server.listen(3000, 'localhost', (error) => {
  error ? console.log(error) 
        : console.log(`Server start on port ${PORT}`)
})