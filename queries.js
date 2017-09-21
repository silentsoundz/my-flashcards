const pgp = require('pg-promise')()
const db = pgp(connectionString);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/flashcards';

function getAllCards() {
  return db.any('SELECT * FROM cards')
}

function getJavaScriptCards() {
  return db.any('SELECT * FROM cards WHERE category_id = 1')
}

function getSqlCards() {
  return db.any('SELECT * FROM cards WHERE category_id = 2')
}

module.exports = { getAllCards, getJavaScriptCards, getSqlCards }
