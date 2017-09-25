const express = require('express')
const bodyParser = require('body-parser')
const cardRoutes = require('./routes/cards')
const app = express()


app.use(bodyParser.urlencoded({extended: false}))

app.use('/static', express.static('public'))

app.set('view engine', 'pug');
// app.set( 'views', __dirname + '/views' );



app.use('/', cardRoutes)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404;
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.error = err
  res.render('error')
})



app.listen(3000, () => {
  console.log('The app is running on localhost:3000');
});