var Session = Ember.Object.extend({
	user: null
});

App.register('session:main', Session);

App.inject('controller', 'session', 'session:main');
App.inject('route', 'session', 'session:main');
