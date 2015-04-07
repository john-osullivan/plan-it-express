var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Express' });
});

/* GET announcements page. */
router.get('/announcements', function(req, res){
    res.render('announcements');
});

/* GET questions page. */
router.get('/questions', function(req, res){
    res.render('questions');
});

/* GET to-dos page. */
router.get('/todos', function(req, res){
    res.render('todos');
});

/* GET notes page. */
router.get('/notes', function(req, res){
    res.render('notes');
});

module.exports = router;
