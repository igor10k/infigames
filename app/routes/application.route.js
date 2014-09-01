App.ApplicationRoute = Ember.Route.extend({
	beforeModel: function () {
		var self = this;
		return $.getJSON('/auth/status').done(function (user) {
			if (user.name) {
				self.set('session.user', Ember.Object.create(user));
			}
		});
	},

	actions: {
		// dummy function to catch optional action
		viewDidAnimateIn: function () {}
	}
});
