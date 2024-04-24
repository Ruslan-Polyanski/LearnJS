import { itemsModels } from "../models/itemsModels.js";

export const getItems = async (request, response) => {
  try {
    const items = await itemsModels.getAllItems();

    response.setHeader('Content-type', 'application/json')
    response.end(JSON.stringify(items))
  } catch (error) {
    response.statusCode = 500;
    response.end(`Error: ${error.message}`)
  }
}


export const getItemsById = async (request, response, id) => {
  try {
    const item = await itemsModels.getItemsById(id);
    if(!item) {
      response.statusCode = 404;
      response.end(`Item with ID: ${id} not found`)
    } else {
      response.setHeader('Content-type', 'application/json')
      response.end(JSON.stringify(item))
    }
  } catch (error) {
    response.statusCode = 500;
    response.end(`Error: ${error.message}`)
  }
};


export const createItem = async (request, response) => {
  try {
    let body = '';

    request.on('data', chunk => {
      body += chunk.toString();
    })

    request.on('end', async () => {
      const items = JSON.parse(body)
      await itemsModels.createItem(items)
      response.statusCode = 201;
      response.setHeader('Content-type', 'application/json')
      response.end(JSON.stringify('OK'))
    })
  } catch (error) {
    response.statusCode = 500;
    response.end(`Error: ${error.message}`)
  }
}


export const updateItem = async (request, response, id) => {
  try {
    let body = '';

    request.on('data', chunk => {
      body += chunk.toString()
    })

    request.on('end', async () => {
      const item = JSON.parse(body);

      await itemsModels.updateItem(id, item)
      response.statusCode = 200;
      response.setHeader('Content-type', 'application/json')
      response.end(JSON.stringify('OK'))
    })
  } catch (error) {
    response.statusCode = 500;
    response.end(`Error: ${error.message}`)
  }
}