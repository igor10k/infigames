var Game = require('../models/game.js');

exports.index = function *() {
	var games = [];

	if (this.req.isAuthenticated()) {
		games = yield Game.findByUserId(this.req.user._id);
	}

	this.body = {
		games: games
	};
};

exports.create = function *() {
	var body = this.request.body;
	var game = {};

	if (this.req.isAuthenticated() && body.game && body.game.title) {
		game = yield Game.createForUser(body.game, this.req.user._id);
	}

	this.body = {
		game: game
	};
};

exports.show = function *() {
	var game = yield Game.findById(this.params.id);

	this.body = {
		game: game
	};
};

exports.update = function *() {
	var body = this.request.body;
	var game = {};

	if (this.req.isAuthenticated() && body.game) {
		game = yield Game.updateForUser(this.params.id, body.game, this.req.user._id);
	}

	this.body = {
		game: game
	};
};

exports.destroy = function *() {
	if (this.req.isAuthenticated()) {
		yield Game.destroyByIdForUser(this.params.id, this.req.user._id);
	}

	this.status = 204;
};
