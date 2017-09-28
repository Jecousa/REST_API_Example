var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Music = require('./models/music')
//Connecting to mongoose
mongoose.connect('mongodb://localhost/rest');
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Go to /api/home');
});

//Get Genre
app.get('/api/genre', function(req,res){
  Genre.getGenre(function(err, genres){
    if(err){
      throw err;
    }
    res.json(genres);
  });
});

//Update Genre
app.put('/api/genre/:_id', function(req,res){
  var id = req.params._id;
  var genre = req.body;
  Genre.updateGenre(id, genre,{},function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

//Add Genre
app.post('/api/genre', function(req,res){
  var genre = req.body;
  Genre.addGenre(genre, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

//Delete Genre
app.delete('/api/genre/:_id', function(req,res){
  var id = req.params._id;
  Genre.removeGenre(id, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

//Add Music
app.post('/api/music', function(req,res){
  var music = req.body;
  Music.addMusic(music, function(err, music){
    if(err){
      throw err;
    }
    res.json(music);
  });
});
//Get Music
app.get('/api/music', function(req,res){
  Music.getMusic(function(err, music){
    if(err){
      throw err;
    }
    res.json(music);
  });
});

//Update Music
app.put('/api/music/:_id', function(req,res){
  var id = req.params._id;
  var music = req.music;
  Music.updateMusic(id, music,{},function(err, music){
    if(err){
      throw err;
    }
    res.json(music);
  });
});

//Delete Music
app.delete('/api/music/:_id', function(req,res){
  var id = req.params._id;
  Music.removeMusic(id, function(err, music){
    if(err){
      throw err;
    }
    res.json(music);
  });
});

//Music ID
app.get('/api/music/:_id', function(req,res){
  Music.getMusicById(req.params._id,function(err, music){
    if(err){
      throw err;
    }
    res.json(music);
  });
});

app.listen(3000);
console.log('Running on Port 3000...')
