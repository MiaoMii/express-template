const express = require('express');
const router = express.Router();
const logger = require('../config/logger');
/* GET users listing. */
router.get('/user', function (req, res, next) {
  logger.error('错误日志');
  // res.send('respond with a resource');
});
let obj = {
  test: '1',
  ls: '1',
};
module.exports = router;
