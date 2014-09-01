/*global FastClick*/

App.ApplicationController = Ember.Controller.extend({
	init: function () {
		$('#loader, .not_standalone').remove();
		FastClick.attach(document.body);
	},

	isGoingBack: Ember.computed.readOnly('session.isGoingBack')
});
