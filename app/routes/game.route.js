App.GameRoute = Ember.Route.extend({
	setupController: function (controller, model) {
		this._super(controller, model);
		controller.set('_rating', model.get('rating') || 50);
		controller.set('_hours', model.get('hours') || 0);
	},

	model: function (params) {
		return this.store.find('game', params.game_id);
	},

	activate: function () {
		this.controllerFor('header').set('parentRoute', 'games');
	},

	deactivate: function () {
		this.controllerFor('header').set('parentRoute', null);
	}
});
