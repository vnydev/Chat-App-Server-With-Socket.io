var express = require('express');
var router = express.Router();

const userList = [
  {name: 'Rahul', email: 'rahul@gmail.com'},
  {name: 'Viney', email: 'vnydev@gmail.com'},
  {name: 'Sandy', email: 'sandy@gmail.com'},
  {name: 'Pankaj', email: 'pankaj@gmail.com'},
  {name: 'Anmol', email: 'anmol@gmail.com'},
  {name: 'Vivek', email: 'vivek@gmail.com'},
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', function(req, res, next) {
  res.status(200).json({data: userList})
});

module.exports = router;
