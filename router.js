var Router = require('koa-router');
var bodyParser = require('koa-body')();

var controllers = {
	render: require('./controllers/render.controller'),
	lookup: require('./controllers/lookup.controller'),
	games: require('./controllers/games.controller'),
	auth: require('./controllers/auth.controller')
};

var router = new Router();

router.get('/', controllers.render.index);

router.get('/lookup/games/:keywords', controllers.lookup.games);
router.get('/lookup/game/:id', controllers.lookup.game);

router.get('/games', controllers.games.index);
router.post('/games', bodyParser, controllers.games.create);
router.get('/games/:id', controllers.games.show);
router.put('/games/:id', bodyParser, controllers.games.update);
router.del('/games/:id', controllers.games.destroy);

router.get('/auth/status', controllers.auth.status);
router.get('/auth/facebook', controllers.auth.facebook);
router.get('/auth/facebook/callback', controllers.auth.facebookCallback);
router.get('/auth/signout', controllers.auth.signout);

module.exports = router;
