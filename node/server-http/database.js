import sqlite3 from 'sqlite3';

sqlite3.verbose()

export const db = new sqlite3.Database('memory', (error) => {
  if(error) {
    console.error(error.message)
  }

  console.log('Connected to sqlite3 database')
})

db.serialize(() => {

  db.run(`CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL, description TEXT)`)

})