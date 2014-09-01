var config = require('./config');
var co = require('co');
var User = require('./models/user.js');
var passport = require('koa-passport');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(new FacebookStrategy({
	clientID: config.fb.appId,
	clientSecret: config.fb.appSecret,
	callbackURL: 'http://' + config.domain + (config.port ? ':' + config.port : '') + '/auth/facebook/callback'
}, function (accessToken, refreshToken, profile, done) {
	co(function* () {
		var user = yield User.findOrCreate({
			name: profile.displayName,
			provider: 'facebook',
			providerId: profile.id
		});
		done(null, user);
	})();
}));
