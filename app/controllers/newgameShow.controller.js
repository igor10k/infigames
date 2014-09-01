App.NewgameShowController = Ember.ObjectController.extend({
	needs: ['loader', 'message'],

	message: Ember.computed.alias('controllers.message'),
	loader: Ember.computed.alias('controllers.loader'),

	bgImg: function () {
		return 'background-image: url("' + this.get('img') + '")';
	}.property('img'),

	actions: {
		error: function () {
			this.get('message').send('showMessage', 'Something went wrong. Please try again.', 'error');
		},

		save: function () {
			var success = function (game) {
				this.set('session.isGoingBack', true);
				this.set('session.hasPresentView', true);
				this.transitionToRoute('game', game.id);
			};

			var model = this.store.createRecord('game', this.get('model'));
			model.save().then(success.bind(this));
		},
	}
});
