App.SearchFormComponent = Ember.Component.extend({
	hasValue: function () {
		return !!this.get('keywords');
	}.property('keywords'),

	didInsertElement: function () {
		this.set('$search', this.$().find('#search'));
	},

	observeFocus: function () {
		if (this.get('isFocused')) {
			this.get('$search').focus();
		}
	}.observes('isFocused'),

	actions: {
		lookup: function () {
			this.get('$search').blur();
			this.sendAction('action', this.get('keywords'));
		},
		cancel: function () {
			this.sendAction('cancel');
		},
		activate: function () {
			this.set('isActive', true);
		},
		deactivate: function () {
			this.set('isActive', false);
		}
	}
});
