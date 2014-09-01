App.SimpleSliderComponent = Ember.Component.extend({
	classNames: ['slider'],
	progress: 0,

	didInsertElement: function () {
		var self = this;
		this.$().ikSlider({
			initialProgress: (self.get('value') - 1) / 99
		}).on('start dragging', function (event, inst) {
			self.set('value', Math.floor(inst.progress * 99) + 1);
		});
	}
});
