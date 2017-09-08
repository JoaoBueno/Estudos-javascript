const db = require('./config/db')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()

const index = require('./routes/index')
// const users = require('./routes/users');

// const pokemons = require('./modules/Pokemon/routes');

const modules = require('./get.modules')('./modules')

const getRoutes = require('./get.routes')

// const maped = modules.map(getRoutes)
// console.log('maped', maped)

const createRoutes = require('./create.routes')(app)

const maped = modules.map(getRoutes)
console.log('maped', maped)

maped.reduce(createRoutes, app)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
// app.use('/users', users);

// app.use('/api/pokemons', pokemons)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
