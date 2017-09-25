const pgp = require('pg-promise')()
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/flashcards';
const db = pgp(connectionString);

function getCards(category_id) {
  return db.any('SELECT * FROM cards WHERE category_id = $1', [category_id])
}

function getAllCards() {
  return db.any('SELECT * FROM cards')
}


module.exports = { getAllCards, getCards }
