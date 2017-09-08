var express = require('express')
var router = express.Router()

const Controller = require('../pokemon-controller')

const list = function(req, res, next) {
  Controller.retrieve({}) 
  .then(data => res.json(data))
  .catch(err => res.json(err))
}

const view = function(req, res, next) {
  Controller.retrieve({"_id":"59aed3c8df33683558c3392f"}) 
  .then(data => res.json(data))
  .catch(err => res.json(err))
}

const create = function(req, res, next) {
  Controller.create(req.body) 
  .then(data => res.json(data))
  .catch(err => res.json(err))
}

const update = function(req, res, next) {
  const query = {
    _id: req.params.id
  }
  Controller.update(query, req.body) 
  .then(data => res.json(data))
  .catch(err => res.json(err))
}

const remove = function(req, res, next) {
  const query = {
    _id: req.params.id
  }
  Controller.delete(query) 
  .then(data => res.json(data))
  .catch(err => res.json(err))
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
  },
  {
    method: 'post',
    path: '/',
    action: create
  },
  {
    method: 'put',
    path: '/:id',
    action: update
  },
  {
    method: 'delete',
    path: '/:id',
    action: remove
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
