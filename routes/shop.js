const _path = require('path');
const _express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = _express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(_path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
