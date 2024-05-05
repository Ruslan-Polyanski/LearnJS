const http = require('http');


let count = 0;

const server = http.createServer((request, response) => {

  switch (request.url) {

    case '/favicon.ico':
      response.setHeader('Content-Type', 'image/x-icon');
      break

    case '/technikon': 
      count++
      response.write('mechanical engineer')
      break

    case '/it': 
      count++
      response.write('frontend')
      break

    default: 
      count++
      response.write('404')

  }

    response.write(' I count data ' + `${count}`)
    response.end()
  
});

server.listen(3004)

