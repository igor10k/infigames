App.HeaderController = Ember.Controller.extend({
	show: function (params) {
		var self = this;

		if (typeof params === 'string') {
			params = [params];
		}

		$.each(params, function (paramIndex, param) {
			self.set('is' + param.charAt(0).toUpperCase() + param.slice(1) + 'Shown', true);
		});
	},

	hideAll: function () {
		for (var property in this) {
			if (this.hasOwnProperty(property) && property.indexOf('is') === 0) {
				this.set(property, false);
			}
		}
	}
});
