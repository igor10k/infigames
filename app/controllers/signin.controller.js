App.SigninController = Ember.Controller.extend({
	actions: {
		signinWithfacebook: function () {
			window.location = '/auth/facebook';
		}
	}
});
