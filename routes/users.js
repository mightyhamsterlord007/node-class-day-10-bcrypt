var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('HELLO CLASS');
});

router.post('/createuser', function(req, res, next) {
  userController.createUser(req.body, function(err, user) {
    if (err) {
      res.json({
        message: 'Fail',
        error: err
      });
      return;
    }
    res.json({
      message: 'Success',
      data: user
    });
    return;
  });
});

router.post('/login', function(req, res, next) {

  userController.loginUser(req.body, function(err, user) {
    if (err) {
      res.json({
        message: 'Fail',
        error: err
      });
      return
    }

    if (user === null) {
      res.status(400).json({
        message: 'Fail',
        error: 'Check your username and password'
      });
      return
    }

    res.json({
      message: 'Success',
      data: user
    });
    return;
  });
});


module.exports = router;
