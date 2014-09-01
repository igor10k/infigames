var passport = require('koa-passport');

exports.facebook = function* () {
	yield passport.authenticate('facebook', {
		display: 'touch'
	});
};

exports.facebookCallback = function* () {
	yield passport.authenticate('facebook', {
		successRedirect: '/#',
		failureRedirect: '/#'
	});
};

exports.status = function* () {
	if (!this.req.user) {
		this.body = [];
	} else {
		this.body = {
			name: this.req.user.name
		};
	}
};

exports.signout = function* () {
	this.req.logout();
	this.body = [];
};
