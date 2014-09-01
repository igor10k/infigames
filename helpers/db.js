var config = require('../config');
module.exports = require('monk')(config.mongoUrl);
