var express = require('express')
var router = express.Router()

const Controller = require('./controller')

const list = function(req, res, next) {
  Controller.retrieve({}) 
  .then(data => res.json(data))
  .catch(err => res.json(err))
}

const view = function(req, res, next) {
  const id = req.params.id
  Controller.view({"_id": id}) 
  .then(data => res.json(data))
  .catch(err => res.json(err))
}

const create = function(req, res, next) {
  console.log('daattatatatatatata', req.body)
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
    method: 'post',
    path: '/',
    action: create
  },
  {
    method: 'get',
    path: '/:id',
    action: view
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
  console.log(route)
  return router[route.method](route.path, route.action)
}

const createRoutes = routes => {
  const result = routes.map(createRoute)
}

createRoutes(routes)

module.exports = router
