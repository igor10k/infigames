Ember.Handlebars.helper('format-hours', function (value, size) {
	var limit;
	value = parseInt(value, 10);
	if (isNaN(value)) { return; }
	size = typeof size === 'number' ? size : 3;
	limit = Math.pow(10, size);
	value = value >= limit ? '<span class="gt">&gt;</span>' + (limit - 1) : value;
	return new Ember.Handlebars.SafeString(value);
});
