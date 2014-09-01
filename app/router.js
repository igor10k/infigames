App.Router.map(function () {
	this.resource('games', { path: '/' });
	this.resource('newgame', { path: 'games/new' }, function () {
		this.route('show', { path: ':game_id' });
	});
	this.resource('game', { path: '/games/:game_id' });
	this.route('signin');
	this.resource('settings', { path: '/settings' }, function () {
		this.route('sharing');
		this.route('signout');
	});
});
