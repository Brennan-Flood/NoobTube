const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLikeInput(data) {
  let errors = {};

  data.videoId = validText(data.videoId) ? data.videoId : '';
  data.userId = validText(data.userId) ? data.userId : '';

  if (Validator.isEmpty(data.userId)) {
    errors.userId = 'userId field is required';
  }

  if (Validator.isEmpty(data.videoId)) {
    errors.videoId = 'videoId field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};