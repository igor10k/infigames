App.GamesRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('game');
	},

	activate: function () {
		if (this.get('session.user')) {
			this.controllerFor('header').show(['settings', 'add']);
		} else {
			this.controllerFor('header').show('signin');
		}
	},

	deactivate: function () {
		this.controllerFor('header').hideAll();
	}
});
