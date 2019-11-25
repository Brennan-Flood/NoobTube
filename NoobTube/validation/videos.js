const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateVideoInput(data) {
  let errors = {};

  data.link = validText(data.link) ? data.link : '';
  data.title = validText(data.title) ? data.title : '';
  data.duration = validText(data.duration) ? data.duration : '';

  if (!Validator.isEmpty(data.link)) {
    errors.link = 'Link field is required';
  }

  if (!Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (!Validator.isLength(data.title, { min: 5, max: 140})) {
    errors.title = 'Title must be between 5 and 140 characters';
  }

  if (!Validator.isEmpty(data.duration)) {
    errors.duration = 'Duration field is required';
  }

  return {
    errors, 
    isValid: Object.keys(errors).length === 0
  };
};