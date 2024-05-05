const http = require('http');
const fs = require('fs');
const path = require('path');

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
};

const readFile = (pathToFile) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, (error, data) => {
      if(error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
};

const FAVICON = path.join(__dirname, 'public', 'favicon.ico');

const server = http.createServer(async (request, response) => {

  switch (request.url) {

    case '/favicon.ico':
      response.setHeader('Content-Type', 'image/x-icon');
      fs.createReadStream(FAVICON).pipe(response)
      return;

    case '/mt': 
    try{
      const data = await readFile('pages/index.html')
      response.write(data)
    } catch (error) {
      response.write('500')
    } finally {
      response.end()
    }
      
    
      
      break

    case '/it': 
      await delay(3000)
      response.write('ok in it')
      response.end()
      break

    default: 
      response.write('404')
      response.end()
  }

});

server.listen(3004)

