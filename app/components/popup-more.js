App.PopupMoreComponent = Ember.Component.extend({
	actions: {
		cancel: function () {
			this.set('isShown', false);
		},

		removeGame: function () {
			this.sendAction('remove');
		}
	}
});
