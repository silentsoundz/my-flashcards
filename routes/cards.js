const router = require('express').Router()
const { getAllCards, getCards } = require('../queries')


router.get('/', (request, response) => {
  console.log("index page");
  response.render('index')
})

router.get('/cards/category/:category_id', (request, response, next) => {
  const category_id = request.params.category_id
  getCards(category_id)
    .then(cards => {
      response.render('play', {cards})
    })
    .catch(next)
})



router.get('/cards/category/wildcardFlashcards', (request, response) => {
  response.render('wildcardFlashcards')
})




module.exports = router;


