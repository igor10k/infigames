window.App = Ember.Application.create();

App.ApplicationSerializer = DS.RESTSerializer.extend({
	primaryKey: '_id',
});
