const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  genre: String,
  src: String,
  description: String
 
});

MovieSchema.methods.toJSON = function () {
  const commesnt = this;
  const commesntP = commesnt.toObject();
  commesntP.id = commesntP._id;
  delete commesntP._id;
  return commesntP;
};

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
