App.NewgameShowRoute = Ember.Route.extend({
	model: function (params) {
		return $.getJSON('/lookup/game/' + params.game_id).then(function (data) {
			return data.game;
		});
	}
});
