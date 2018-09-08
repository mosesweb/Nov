var mongoose = require('mongoose');

var RatingSchema = new mongoose.Schema({
  rating: {type: Number, default: 0},
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
}, {timestamps: true, usePushEach: true});

// Requires population of author
RatingSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    rating: this.rating,
    createdAt: this.createdAt,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Rating', RatingSchema);
