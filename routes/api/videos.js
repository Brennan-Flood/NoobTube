const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const passport = require('passport');

const Video = require('../../models/Video');
const validateVideoInput = require('../../validation/videos');

router.get('/', (req, res) => {
  Video.find()
    .sort({ date: -1})
    .then(videos => res.json(videos))
    .catch(err => res.status(404).json({ novideosfound: 'No videos found'}));
});

router.get('/user/:user_id', (req, res) => {
  Video.find({ user: req.params.user_id})
    .then(videos => res.json(videos))
    .catch(err => 
      res.status(404).json({ novideosfound: 'No videos found from that user'}
    )
  );
});

router.get('/:id', (req, res) => {
  Video.findById(req.params.id)
    .then(video => res.json(video))
    .catch(err => 
      res.status(404).json({ novideofound: 'No video found with that ID'})
    );
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateVideoInput(req.body);
  

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newVideo = new Video({
      user: req.user.id, 
      link: req.body.link,
      title: req.body.title, 
      duration: req.body.duration, 
      author: req.user.handle,
      likes: 0,
      dislikes: 0
    });

    newVideo.save().then(video => res.json(video));
  }
);

module.exports = router; 