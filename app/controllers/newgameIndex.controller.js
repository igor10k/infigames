App.NewgameIndexController = Ember.ArrayController.extend({
	needs: ['loader', 'message'],

	message: Ember.computed.alias('controllers.message'),
	loader: Ember.computed.alias('controllers.loader'),

	actions: {
		lookup: function (keywords) {
			var before = function () {
				this.set('isSearchLooking', true);
				this.set('loader.isActive', true);
			};

			var after = function () {
				this.set('isSearchLooking', false);
				this.set('loader.isActive', false);
			};

			var success = function (data) {
				this.set('model', data.games);
			};

			var failure = function () {
				this.get('message').send('showMessage', 'Something went wrong. Please try again.', 'error');
			};

			if (keywords) {
				before.call(this);
				$.getJSON('/lookup/games/' + keywords)
					.always(after.bind(this))
					.done(success.bind(this))
					.fail(failure.bind(this));
			}
		},

		goBack: function () {
			this.set('session.hasPresentView', true);
			this.transitionToRoute('games');
		}
	}
});
