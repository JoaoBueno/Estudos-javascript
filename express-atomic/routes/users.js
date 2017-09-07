var express = require('express')
var router = express.Router()

const Controller = require('../pokemon-controller')

const list = function(req, res, next) {
  console.log(Controller.retrieve(res, {}) )
  // .then(data => res.json(data))
  // .catch(err => res.json(err))
}

const view = function(req, res, next) {
  res.send('respond with a view')
}

const routes = [
  {
    method: 'get',
    path: '/',
    action: list
  },
  {
    method: 'get',
    path: '/view',
    action: view
  }
]

const createRoute = route => {
  return router[route.method](route.path, route.action)
}

const createRoutes = routes => {
  const result = routes.map(createRoute)
}

createRoutes(routes)

/* GET users listing. */
// router.get('/', list)
// router.get('/view', view)

module.exports = router
