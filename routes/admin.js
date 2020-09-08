const _path = require('path');
const _express = require('express');
const rootDir = require('../util/path');

const router = _express.Router();


const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(_path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);

  products.push({item: req.body.title});

  res.redirect('/');
});

module.exports = {
  routes: router,
  products: products
}
