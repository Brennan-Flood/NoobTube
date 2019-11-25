const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Video = require('../../models/Video');
const validateVideoInput = require('../..validation/videos');

router.get('/', (req, res) => {
  
})