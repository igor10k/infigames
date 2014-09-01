Ember.Handlebars.helper('format-date', function (value, options) {
	if (!value) { return; }
	var result;
	if (options === 'y') {
		result = new Date(value).getFullYear();
	}
	return new Ember.Handlebars.SafeString(result);
});
