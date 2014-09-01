App.SettingsSignoutRoute = Ember.Route.extend({
	beforeModel: function () {
		var self = this;

		return $.ajax({
			url: '/auth/signout'
		}).done(function () {
			self.store.unloadAll('game');
			self.set('session.user', null);
			self.transitionTo('games');
		});
	}
});
