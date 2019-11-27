const express = require('express');
const router = = express.Router();
const mongoose = require('moongoose');
const passport = require('passport');

const Like = require('../../models/Like');
const validateCommentInput = require('../../validation/likes');

router.get('')