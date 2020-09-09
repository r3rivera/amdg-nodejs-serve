
const _express = require('express');

const adminData = require('./admin');

const router = _express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  
  res.render('shop', {
    pageTitle:'Shop Cart',
    products: adminData.products,
    path: '/',
    hasProducts: adminData.products.length > 0,
    activeShop: true,
    productCSS: true

  });
});

module.exports = router;
