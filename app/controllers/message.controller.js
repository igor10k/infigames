App.MessageController = Ember.Controller.extend({
	actions: {
		showMessage: function (message, type) {
			this.set('message', message);
			this.set('messageType', type || 'info');
		},

		hideMessage: function () {
			this.set('message', null);
			this.set('messageType', null);
		}
	}
});
