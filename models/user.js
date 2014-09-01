var db = require('../helpers/db');
var comonk = require('co-monk');
var users = comonk(db.get('users'));

var prepareUser = function (game) {
	var preparedUser = {};

	var allowedFields = [
		'name',
		'provider',
		'providerId'
	];

	allowedFields.forEach(function (field) {
		if (game[field]) {
			preparedUser[field] = game[field];
		}
	});

	return preparedUser;
};

exports.findOrCreate = function* (params) {
	var user = yield users.findOne({
		provider: params.provider,
		providerId: params.providerId
	});
	if (user) {
		return user;
	}
	return yield users.insert(prepareUser(params));
};
