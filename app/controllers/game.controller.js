App.GameController = Ember.ObjectController.extend({
	bgImg: function () {
		return 'background-image: url("' + this.get('img') + '")';
	}.property('img'),

	focusHoursInput: function () {
		if (this.get('isHoursPopupShown')) {
			setTimeout(function () {
				$('#input-hours').focus();
			}, 200);
		}
	}.observes('isHoursPopupShown'),

	actions: {
		togglePopup: function (type, trueOrFalse) {
			this.set('is' + type.charAt(0).toUpperCase() + type.slice(1) + 'PopupShown', trueOrFalse);
		},

		saveRating: function () {
			this.send('togglePopup', 'rating', false);
			this.set('model.rating', this.get('_rating'));
			this.get('model').save();
		},

		saveHours: function () {
			this.send('togglePopup', 'hours', false);
			this.set('model.hours', this.get('_hours'));
			this.get('model').save();
		},

		removeGame: function () {
			this.get('model').destroyRecord();
			this.set('session.isGoingBack', true);
			this.transitionToRoute('games');
		}
	}
});
