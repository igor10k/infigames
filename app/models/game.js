App.Game = DS.Model.extend({
	img: DS.attr('string'),
	title: DS.attr('string'),
	releaseDate: DS.attr('date'),
	developer: DS.attr('string'),
	overview: DS.attr('string'),
	platform: DS.attr('string'),

	rating: DS.attr('number'),
	hours: DS.attr('number'),
	state: DS.attr('string'),
	finishDate: DS.attr('date'),

	createDate: DS.attr('date')
});
