const mongoose = require('mongoose');

const Schema = mongoose.Schema;       
const postSchema = new Schema({
  title: String,
  permalink: String,
  preview: Schema.Types.Mixed,
});

const Post = mongoose.model('topRedditPosts', postSchema);

module.exports = { Post };
