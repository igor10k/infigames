/* global App, DS */

App.User = DS.Model.extend({
	name: DS.attr('string'),
	provider: DS.attr('string'),
	providerId: DS.attr('string'),
	games: DS.hasMany('game')
});
