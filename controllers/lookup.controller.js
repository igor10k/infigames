var request = require('koa-request');
var parseXml = require('../middlewares/parseXml');

exports.games = function *() {
	var url = 'http://thegamesdb.net/api/GetGamesList.php?name=' + this.params.keywords;
	var response = yield request(url);
	var parsedResponse = yield parseXml(response.body);
	var games = [];
	if (parsedResponse.Data.Game) {
		parsedResponse.Data.Game.forEach(function (game) {
			games.push({
				id: game.id,
				title: game.GameTitle,
				platform: game.Platform,
				releaseDate: Date.parse(game.ReleaseDate)
			});
		});
	}
	this.body = {
		games: games
	};
};

exports.game = function *() {
	var url = 'http://thegamesdb.net/api/GetGame.php?id=' + this.params.id;
	var response = yield request(url);
	var parsedResponse = yield parseXml(response.body);
	var game = {};
	var parsedGame = parsedResponse.Data && parsedResponse.Data.Game;
	if (parsedGame) {
		game = {
			title: parsedGame.GameTitle,
			platform: parsedGame.Platform,
			releaseDate: parsedGame.ReleaseDate,
			overview: parsedGame.Overview,
			developer: parsedGame.Developer,

		};

		if (parsedGame.Images) {
			var imgPath, boxart;

			boxart = parsedGame.Images.boxart;
			boxart = Array.isArray(boxart) ? boxart[1] : boxart;
			imgPath = boxart.$.thumb;
			game.img = parsedResponse.Data.baseImgUrl + imgPath;
		}
	}
	this.body = {
		game: game
	};
};
