App.SigninRoute = Ember.Route.extend({
	beforeModel: function () {
		if (this.get('session.user')) {
			this.transitionTo('games');
		}
	},

	activate: function () {
		this.controllerFor('header').set('parentRoute', 'games');
	},

	deactivate: function () {
		this.controllerFor('header').set('parentRoute', null);
	}
});
