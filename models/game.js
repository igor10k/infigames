var db = require('../helpers/db');
var comonk = require('co-monk');
var games = comonk(db.get('games'));

var prepareGame = function (game, userId) {
	var preparedGame = {};

	var allowedFields = [
		'img',
		'title',
		'rating',
		'hours',
		'finishedAt',
		'platform'
	];

	allowedFields.forEach(function (field) {
		if (game[field]) {
			preparedGame[field] = game[field];
		}
	});

	preparedGame.user = db.id(userId);

	return preparedGame;
};

exports.findByUserId = function* (userId) {
	return yield games.find({ user: db.id(userId) });
};

exports.findById = function* (gameId) {
	return yield games.find({ _id: db.id(gameId) });
};

exports.createForUser = function* (game, userId) {
	return yield games.insert(prepareGame(game, db.id(userId)));
};

exports.updateForUser = function* (gameId, game, userId) {
	return yield games.findAndModify({
		user: db.id(userId),
		_id: db.id(gameId),
	}, prepareGame(game, userId), {
		new: true
	});
};

exports.destroyByIdForUser = function* (gameId, userId) {
	return yield games.remove({
		_id: db.id(gameId),
		user: db.id(userId)
	});
};
