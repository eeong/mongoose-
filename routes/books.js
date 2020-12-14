var express = require('express');
var router = express.Router();
const Books = require('../schemas/Book.js');


/* GET users listing. */
router.get('/create', async function(req, res, next) {
  try{
    const book = new Books({
      title:'title1',
      writer:'writer1',
      comment:'comment1'
    });
    const result = await book.save();
    res.json(result);
  }
  catch(err){
    console.log(err)
  }

});
/* 
router.get('/list', async function(req, res, next) {
  try{
    const book = awit Books.find(
      
    );
    const result = await book.save();
    res.json(result);
  catch(err){
    console.log(err)
  }

}); */
module.exports = router;
