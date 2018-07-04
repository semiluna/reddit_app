const express = require('express');
const request = require('request');
const mongoose = require('mongoose');
const { Post } = require('../models');

const router = express.Router();

const conn = mongoose.connection;

router.get('/update', (req, res1) => {
  request.get('http://reddit.com/r/popular.json?limit=100', (err, res, body) => {
    const topPosts = JSON.parse(body);
    const postArray = topPosts.data.children.map((obj) => {
      const newObj = new Post({
        title: obj.data.title,
        permalink: obj.data.permalink,
        preview: obj.data.preview,
      });
      conn.collection('topRedditPosts').insert(newObj);
      return newObj.toJSON();
    });

    res1.send(postArray);
  });
});

module.exports = router;
