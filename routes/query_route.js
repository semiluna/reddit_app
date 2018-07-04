const express = require('express');
const request = require('request');
const mongoose = require('mongoose');

const { Post } = require('../models');

const router = express.Router();

const db = mongoose.connection;
// console.log(db);

router.post('/update', (req, res) => {
  console.log("ENTERS THE REQUEST");
  const keyword = req.body.keyword;
  const queryResult = new Array ();
  console.log('THE KEYWORD IS ' + keyword);  
  Post.find({}, (err, posts) => {
    if (err) { 
      console.log(err);
    }
    // console.log(typeof post);
    for (let property in posts) {
      let obj = posts[property];
      let str = obj.title.toLowerCase(); 
      if (str.search(keyword) != -1) {
        queryResult.push(obj);
        //console.log("HERE COMES A GOOD OBJECT: " + obj + "\n\n\n");
      }
    }
    
    res.send(queryResult);
    console.log(queryResult);
  });
});

module.exports = router;
