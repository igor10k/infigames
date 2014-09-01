var app = require('koa')();
var session = require('koa-generic-session');
var redisStore = require('koa-redis');
var hbs = require('koa-hbs');
var serve = require('koa-static');
var passport = require('koa-passport');
var router = require('./router');
var config = require('./config');

if (app.env !== 'production') {
	app.use(require('koa-livereload')());
}

app.keys = config.keys.split(',');
app.use(session({
	cookie : {
		maxAge: 604800000 // week
	},
	store: redisStore({
		host: config.redis.host,
		port: config.redis.port,
		pass: config.redis.pass
	})
}));
require('./auth');
app.use(passport.initialize());
app.use(passport.session());

app.use(hbs.middleware({
	viewPath: __dirname + '/views',
	locals: {
		isWebApp: !process.env.NOTWEBAPP,
		isProduction: app.env === 'production'
	}
}));

app.use(router.middleware());

app.use(serve('public'));

app.listen(process.env.PORT || 3000);
