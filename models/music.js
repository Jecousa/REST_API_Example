var mongoose= require('mongoose');

//Genre Schema
var musicSchema = mongoose.Schema({
  artist:{
    type: String,
    require:true
  },
  genre:{
    type: String,
    require:true
  },
  description:{
    type: String,
    require:true
  },
  image_url:{
    type: String
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Music = module.exports = mongoose.model('Music',musicSchema,'music');

//Get music

module.exports.getMusic = function(callback, limit){
  Music.find(callback).limit(limit);
}

//Get Music by ID
module.exports.getMusicById = function(id, callback){
  Music.findById(id, callback);
}

//Add Music
module.exports.addMusic = function(callback, music){
  Music.create(music, callback);
}

//Update Music
module.exports.updateMusic = function(id, music, options, callback){
  var query = {_id: id};
  var update = {
    artist: music.artist,
    genre: music.genre,
    description: music.description,
    image_url: music.image_url
  }
  Music.findOneAndUpdate(query, update, options, callback);
}

//Delete Music
module.exports.removeMusic = function(id, callback){
    var query = {_id: id};
  Music.remove(query, callback);
}
