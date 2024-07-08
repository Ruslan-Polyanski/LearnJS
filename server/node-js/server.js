const express = require('express');
const path = require('path')
const favicon = require('serve-favicon')
const morgan = require('morgan');
const mongoose = require('mongoose')

const server = express()

server.set('wiew engine', 'ejs')

const PORT = 3000;
const DB = 'mongodb+srv://ruslan:eKtMaK7@cluster0.44bvpx5.mongodb.net/node-blog?retryWrites=true&w=majority&appName=Cluster0';

const createPath = (page) => {
  return path.resolve(__dirname, 'ejs-frontend', `${page}.ejs`)
};

server.listen(PORT, (error) => {
  error ? console.log(error) 
        : console.log(`Server start on port ${PORT}`)
})

server.use(morgan(':method :url :status'))
server.use(favicon(path.join(__dirname, 'src', 'favicon.png')))
server.use(express.static('styles'))
server.use(express.urlencoded({extended: false}))

server.post('/add-post', (request, response) => {
  const { title, author, text } = request.body;
  const post = {
    id: new Date,
    date: new Date().toLocaleDateString(),
    title,
    author,
    text,
  }
  response.render(createPath('post'), {post, title})
})

server.get('/', (request, response) => {
  const title = 'Главная страница';
  response
      .status(200)
      .render(createPath('index'), {title})
})

server.get('/contacts', (request, response) => {
  const title = 'Контакты';
  const contacts = [
    {name: 'YouTube', link: 'https://youtube.com'},
    {name: 'X', link: 'https://x.com'},
    {name: 'GitHub', link: 'https://github.com'},
  ];
  response.render(createPath('contacts'), {contacts, title})
})

server.get('/posts/:id', (request, response) => {
  const title = 'Пост';
  const post = {
    id: '1',
    text: 'Тут какой-то текст длинный с описанием.',
    title: 'Post title',
    date: '05.05.2021',
    author: 'Ruslo'
  }
  response.render(createPath('post'), {title, post})
})

server.get('/posts', (request, response) => {
  const title = 'Все посты';
  const posts = [
    {
      id: '1',
      text: 'Тут какой-то текст длинный с описанием.',
      title: 'Post title - 1',
      date: '05.05.2021',
      author: 'Ruslo' },
    {
      id: '2',
      text: 'Тут какой-то текст длинный с описанием.',
      title: 'Post title - 2',
      date: '05.05.2021',
      author: 'Ruslo' },
    {
      id: '3',
      text: 'Тут какой-то текст длинный с описанием.',
      title: 'Post title - 3',
      date: '05.05.2021',
      author: 'Ruslo' },

]
  response.render(createPath('posts'), {title, posts})
})

server.get('/add-post', (request, response) => {
  const title = 'Добавить пост';
  response.render(createPath('add-post'), {title})
})

server.use((request, response) => {
  const title = 'Ошибка';
  response
        .status(404)
        .render(createPath('error'), {title})
})