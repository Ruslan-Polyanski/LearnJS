import http from 'http';
import { getItems, getItemsById, createItem, updateItem } from './controller/itemsController.js';

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  const { pathname } = url;

  if(request.method === 'GET' && pathname === '/items') {
    await getItems(request, response)
  } else if(request.method === 'GET' && pathname.startsWith('/items/')) {
    const id = pathname.split('/')[2];
    await getItemsById(request, response, id)
  } else if (request.method === 'POST' && pathname === '/items') {
    await createItem(request, response);
  } else if(request.method === 'PUT' && pathname.startsWith('/items/')) {
    const id = pathname.split('/')[2];
    await updateItem(request, response, id)
  } else {
    response.statusCode = 404;
    response.end('404')
  }
  
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})